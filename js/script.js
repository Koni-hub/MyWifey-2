/* ============================================================
   Two Months of Us — script
   Personalize the CONFIG block below.
   ============================================================ */

const CONFIG = {
  /* ⭐ YOUR PHOTOS — drop the files into "assets".
     Each entry tries .jpg, then .png, then .jpeg. */
  photos: [
    { file: "photo1", caption: "Two halves, one whole heart 💗", hero: true },
    { file: "photo2", caption: "“My Wifey” drawing ⭐" },
    { file: "photo3", caption: "Our grumpy little cat 🐱" },
    { file: "photo4", caption: "Love Ones — Koni ♥ Yana 🤝" },
    { file: "photo5", caption: "Us in Roblox 🍓🎮" },
    { file: "photo6", caption: "Half-heart over video call 🤍" },
    { file: "photo7", caption: "Playtime — just the two of us 🏆" },
    { file: "photo8", caption: "OOTD check, Roblox edition 🍓" },
    { file: "photo9", caption: "My light in the dark 🏮" },
    { file: "photo10", caption: "Close-up of your cute face 🍓" },
    { file: "photo11", caption: "A walk through the mansion 🏰" },
    { file: "photo12", caption: "My hero ⚔️" },
    { file: "photo13", caption: "It was destiny ✨" },
    { file: "photo14", caption: "Lava run, chain hands 🧗‍♀️🔥" },
    { file: "photo15", caption: "In the dark, I won't let go 🖤" },
    { file: "photo16", caption: "Chess at sunset ♟️🌇" },
    { file: "photo17", caption: "Drawing together over video call 🎨" },
  ],

  /* ⭐ YOUR SONG — drop your own file at "assets/music.mp3".
     Change the title/artist so the player shows the right name. */
  music: {
    src: "assets/music.mp3",
    title: "Miles Apart",
    artist: "Nick Wilson",
  },
};

/* New photos for month two: assets/second1.jpg, second2.jpg …
   Only files that exist are shown. */
const SECOND_PHOTOS = 24;

const SECOND_CAPTIONS = {
  1: "Kahit sa Roblox, yakap pa rin kita 🌋💙",
  2: "Strawberry hat and her little boy 🍓📱",
  3: "Strawberry girl na dala nya ang hubby nya 🍓",
  4: "Close-up ng aking strawberry girl 🍓☁️",
  5: "wala kang buhok, ikaw pa rin ang panalo ko 🎯",
  6: "Pareho tayong nagtatago sa phone📱💗",
  7: "Half-heart each, buo pa rin tayo 🤍",
  8: "359 hours sa call — hindi pa rin sapat ☎️",
  9: "Night drive sa Roblox, may Santa hat pa 🎄🚗",
  10: "Yung bini baby na kita 🫂💗",
  11: "Kotse nating may “LOVE” — literal 🚗💗",
  12: "Bike date, kahit sa Roblox lang 🚲💗",
  13: "Calls habang nagguguhit — favorite multitasking 🎨☎️",
  14: "Koni & Yana as cats, puso pa ang buntot 🐱💗",
  15: "Puzzle pieces: YOU & ME, laging magkakabit 🧩",
  16: "Jellyfish drawings natin, pareho pa rin ang vibe 🌊🎨",
  17: "Drawing spider sa call 🎨☎️",
  18: "Mga filter na kalokohan, tawa pa rin tayo 😭✨",
  19: "Screenshot sa call — my girl, always 🌸",
  20: "Kahit sa reflection ng screen, ikaw pa rin 🖥️💗",
};

/* ---------------- helpers ---------------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const HEART_CHARS = ["♥", "♥", "♡", "❤"];
const HEART_COLORS = ["#d98a9f", "#f0d6ae", "#d8b183", "#f2ece4"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ============================================================
   1. INTRO TITLE CARD
   ============================================================ */
const intro = $("#intro");
const openBtn = $("#openBtn");
const filmReel = $("#filmReel");
document.body.classList.add("is-locked", "is-intro");

let introOpening = false;
function openSurprise() {
  if (!intro || introOpening) return;
  introOpening = true;
  filmReel?.classList.add("is-playing");
  setTimeout(() => {
    intro.classList.add("is-out");
    document.body.classList.remove("is-locked", "is-intro");
    heroVideo?.play().catch(() => {});
    playMusic();
    setTimeout(() => { intro.hidden = true; }, 1050);
  }, 620);
}

if (openBtn) openBtn.addEventListener("click", openSurprise);
if (filmReel) filmReel.addEventListener("click", openSurprise);

/* Hero background video: reveal only after playback starts; keep the starfield fallback. */
const heroVideo = $("#heroVideo");
if (heroVideo) {
  heroVideo.addEventListener("playing", () => heroVideo.classList.add("is-playing"));
  heroVideo.addEventListener("error", () => heroVideo.classList.remove("is-playing"));
  heroVideo.play().catch(() => {
    /* Autoplay can be blocked; video still starts when the intro button is pressed. */
  });
}

/* ============================================================
   2. STARFIELD
   ============================================================ */
const canvas = $("#stars");
const ctx = canvas ? canvas.getContext("2d") : null;
let stars = [];
let meteors = [];
let W = 0;
let H = 0;
const dpr = Math.min(window.devicePixelRatio || 1, 2);

function buildStars() {
  const count = Math.min(190, Math.round((W * H) / 9000));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.25 + 0.25,
    a: Math.random() * 0.5 + 0.2,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.7 + 0.15,
  }));
}

function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  buildStars();
  if (reduceMotion) drawStatic();
}

function drawStatic() {
  ctx.clearRect(0, 0, W, H);
  stars.forEach((s) => {
    ctx.globalAlpha = s.a;
    ctx.fillStyle = "#f4e7d4";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawFrame(t) {
  ctx.clearRect(0, 0, W, H);

  stars.forEach((s) => {
    const twinkle = 0.55 + Math.sin(t * s.speed + s.phase) * 0.45;
    ctx.globalAlpha = Math.max(0.04, s.a * twinkle);
    ctx.fillStyle = "#f4e7d4";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  /* occasional shooting star */
  if (Math.random() < 0.0022 && meteors.length < 2) {
    meteors.push({
      x: W * (0.15 + Math.random() * 0.75),
      y: H * (0.05 + Math.random() * 0.4),
      vx: -(2.2 + Math.random() * 1.8),
      vy: 1.1 + Math.random() * 1.4,
      life: 1,
    });
  }

  meteors = meteors.filter((m) => {
    m.x += m.vx * 3;
    m.y += m.vy * 3;
    m.life -= 0.012;
    if (m.life <= 0 || m.x < -100 || m.y > H + 100) return false;

    const tailX = m.x - m.vx * 14;
    const tailY = m.y - m.vy * 14;
    const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
    grad.addColorStop(0, `rgba(240, 214, 174, ${0.55 * m.life})`);
    grad.addColorStop(1, "rgba(240, 214, 174, 0)");
    ctx.globalAlpha = 1;
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
    return true;
  });
}

if (canvas && ctx) {
  resize();
  window.addEventListener("resize", resize);
  if (!reduceMotion) {
    const loop = (now) => {
      drawFrame(now / 1000);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

/* ============================================================
   3. HEART BURST
   ============================================================ */
function burstHearts(x, y, count = 16) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "burst-heart";
    el.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];
    el.style.color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
    const angle = Math.random() * Math.PI * 2;
    const dist = 30 + Math.random() * 140;
    el.style.left = x + Math.cos(angle) * dist - 10 + "px";
    el.style.top = y + Math.sin(angle) * dist - 10 + "px";
    el.style.fontSize = 13 + Math.random() * 20 + "px";
    el.style.animationDuration = 1.2 + Math.random() * 1.1 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }
}

const burstBtn = $("#heartBurstBtn");
if (burstBtn) {
  burstBtn.addEventListener("click", (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    burstHearts(r.left + r.width / 2, r.top + r.height / 2, 26);
  });
}

document.addEventListener("click", (e) => {
  if (Math.random() < 0.3 && !e.target.closest("button, a, .tile, .frame")) {
    burstHearts(e.clientX, e.clientY, 3);
  }
});

/* ============================================================
   4. LIVE COUNTER — since 5 September 2026, 11:34 PM
   ============================================================ */
const START = new Date("2026-09-05T23:34:00+08:00").getTime();
const statEls = $$(".stat__num");
let counterStarted = false;

function elapsed() {
  const seconds = Math.max(0, (Date.now() - START) / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor(seconds / 60),
    seconds: Math.floor(seconds),
  };
}

function renderCounter(multiplier = 1) {
  const values = elapsed();
  statEls.forEach((el) => {
    const unit = el.dataset.unit;
    const value = Math.floor(values[unit] * multiplier);
    el.textContent = value.toLocaleString("en-US");
  });
}

function startCounter() {
  if (counterStarted || !statEls.length) return;
  counterStarted = true;

  if (reduceMotion) {
    renderCounter();
    setInterval(() => renderCounter(), 1000);
    return;
  }

  const duration = 1400;
  const t0 = performance.now();

  function step(now) {
    const p = Math.min(1, (now - t0) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    renderCounter(eased);
    if (p < 1) requestAnimationFrame(step);
    else setInterval(() => renderCounter(), 1000);
  }

  requestAnimationFrame(step);
}

/* ============================================================
   5. GALLERIES
   ============================================================ */
const EXTENSIONS = ["jpg", "png", "jpeg"];
const galleryItems = [];

function withFallbacks(img, base, onFail) {
  const paths = EXTENSIONS.map((e) => `assets/${base}.${e}`);
  let i = 0;

  img.addEventListener("error", () => {
    i++;
    if (i < paths.length) img.src = paths[i];
    else if (onFail) onFail();
  });

  img.addEventListener("load", () => {
    if (img.naturalWidth > 0) img.classList.add("is-loaded");
  });

  img.src = paths[0];
}

/* ---- Archive filmstrip (all CONFIG.photos) ---- */
const galleryGrid = $("#galleryGrid");

CONFIG.photos.forEach((p, idx) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "frame reveal";
  btn.style.transitionDelay = `${Math.min(idx * 45, 360)}ms`;
  btn.innerHTML = `
    <span class="frame__wrap">
      <img alt="${p.caption.replace(/"/g, "&quot;")}">
      <span class="frame__num">${String(idx + 1).padStart(2, "0")}</span>
      <span class="frame__ph">♥<small>assets/${p.file}.jpg</small></span>
    </span>
    <span class="frame__cap">${p.caption}</span>
  `;

  const img = btn.querySelector("img");
  withFallbacks(img, p.file, () => btn.classList.add("is-missing"));
  btn.addEventListener("click", () => openLightbox(img, p.caption));
  galleryGrid.appendChild(btn);
  galleryItems.push({ img, caption: p.caption });
});

/* ---- Month two filmstrip ---- */
const secondGrid = $("#secondGrid");
const secondSection = $("#second");
let secondFailed = 0;

if (secondGrid) {
  for (let n = 1; n <= SECOND_PHOTOS; n++) {
    const caption = SECOND_CAPTIONS[n] || "2nd monthsary 💗";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "frame frame--month-two reveal";
    btn.style.transitionDelay = `${Math.min((n - 1) * 55, 440)}ms`;
    btn.innerHTML = `
      <span class="frame__wrap">
        <img alt="${caption.replace(/"/g, "&quot;")}">
        <span class="frame__num">${String(n).padStart(2, "0")}</span>
        <span class="frame__ph">♥<small>assets/second${n}.jpg</small></span>
      </span>
      <span class="frame__cap">${caption}</span>
    `;

    const img = btn.querySelector("img");
    withFallbacks(img, `second${n}`, () => {
      btn.remove();
      secondFailed++;
      if (secondFailed === SECOND_PHOTOS && secondSection) secondSection.hidden = true;
    });
    btn.addEventListener("click", () => openLightbox(img, caption));
    secondGrid.appendChild(btn);
    galleryItems.push({ img, caption });
  }
}

/* ---- Featured heart photo ---- */
const featuredImg = $(".poster__frame img");
if (featuredImg) withFallbacks(featuredImg, "second7");

/* ============================================================
   6. ARCHIVE ARROWS
   ============================================================ */
const strip = $("#galleryGrid");
function scrollStrip(dir) {
  const targetStrip = strip;
  if (!targetStrip) return;
  const card = targetStrip.querySelector(".frame");
  const step = card ? card.getBoundingClientRect().width + 18 : 320;
  targetStrip.scrollBy({ left: dir * step * 1.6, behavior: reduceMotion ? "auto" : "smooth" });
}

function scrollMonthTwo(dir) {
  if (!secondGrid) return;
  const card = secondGrid.querySelector(".frame");
  const step = card ? card.getBoundingClientRect().width + 18 : 320;
  secondGrid.scrollBy({ left: dir * step * 1.6, behavior: reduceMotion ? "auto" : "smooth" });
}

$("#archivePrev")?.addEventListener("click", () => scrollStrip(-1));
$("#archiveNext")?.addEventListener("click", () => scrollStrip(1));
$("#monthTwoPrev")?.addEventListener("click", () => scrollMonthTwo(-1));
$("#monthTwoNext")?.addEventListener("click", () => scrollMonthTwo(1));

/* ============================================================
   7. LIGHTBOX
   ============================================================ */
const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");
const lightboxCaption = $("#lightboxCaption");
const lightboxCount = $("#lightboxCount");
const lightboxPrev = $("#lightboxPrev");
const lightboxNext = $("#lightboxNext");
let lbList = [];
let lbIndex = 0;

function showLightboxAt(index) {
  if (!lbList.length) return;
  lbIndex = (index + lbList.length) % lbList.length;
  const item = lbList[lbIndex];
  lightboxImg.src = item.img.currentSrc || item.img.src;
  lightboxImg.alt = item.caption;
  lightboxCaption.textContent = item.caption;
  lightboxCount.textContent = `${lbIndex + 1} / ${lbList.length}`;
  const single = lbList.length < 2;
  lightboxPrev.style.visibility = single ? "hidden" : "visible";
  lightboxNext.style.visibility = single ? "hidden" : "visible";
}

function openLightbox(img, caption) {
  if (!img || !img.classList.contains("is-loaded")) return;
  lbList = galleryItems.filter((item) => item.img.classList.contains("is-loaded"));
  const index = lbList.findIndex((item) => item.img === img);
  if (index < 0) return;

  showLightboxAt(index);
  lightbox.hidden = false;
  requestAnimationFrame(() => lightbox.classList.add("show"));
  document.body.classList.add("is-locked");
}

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;
  lightbox.classList.remove("show");
  document.body.classList.remove("is-locked");
  setTimeout(() => { lightbox.hidden = true; }, 350);
}

$("#lightboxClose")?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => showLightboxAt(lbIndex - 1));
lightboxNext?.addEventListener("click", () => showLightboxAt(lbIndex + 1));

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox || lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showLightboxAt(lbIndex - 1);
  if (e.key === "ArrowRight") showLightboxAt(lbIndex + 1);
});

/* ============================================================
   8. DEEPER LETTER
   ============================================================ */
const deepBtn = $("#deepLetterBtn");
const deepLetter = $("#deepLetter");
const deepLabel = $(".letter__more-label");

if (deepBtn && deepLetter) {
  deepBtn.addEventListener("click", () => {
    const isOpen = !deepLetter.hidden;
    deepLetter.hidden = isOpen;
    deepBtn.classList.toggle("is-open", !isOpen);
    deepBtn.setAttribute("aria-expanded", String(!isOpen));
    if (deepLabel) deepLabel.textContent = isOpen ? "Read the deeper one" : "Hide it for now";

    if (!isOpen) {
      setTimeout(() => {
        deepBtn.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      }, 100);
    }
  });
}

/* ============================================================
   9. MUSIC — our song
   ============================================================ */
const music = $("#bgMusic");
const musicBtn = $("#musicBtn");
const musicTitle = $("#musicTitle");
const musicArtist = $("#musicArtist");
const song = CONFIG.music || {};
let musicOn = false;
const idleArtist = song.artist || "Koni ♥ Yana";

if (musicTitle) musicTitle.textContent = song.title || "Our Song";
if (musicArtist) musicArtist.textContent = idleArtist;
if (music && song.src) music.src = song.src;
if (musicBtn) musicBtn.setAttribute("aria-label", `Play ${song.title || "our song"}`);

function setPlaying(on) {
  musicOn = on;
  musicBtn?.classList.toggle("playing", on);
  musicBtn?.setAttribute("aria-pressed", String(on));
  musicBtn?.setAttribute("aria-label", `${on ? "Pause" : "Play"} ${song.title || "our song"}`);
}

function playMusic() {
  if (!music || !song.src) return;
  music.volume = 0.55;
  music.play().then(() => setPlaying(true)).catch(() => {
    /* missing file or autoplay blocked — the button still works after a tap */
  });
}

musicBtn?.addEventListener("click", () => {
  if (!music) return;
  if (musicOn) {
    music.pause();
    setPlaying(false);
  } else {
    playMusic();
  }
});

music?.addEventListener("play", () => setPlaying(true));
music?.addEventListener("pause", () => setPlaying(false));
music?.addEventListener("error", () => {
  if (musicArtist) musicArtist.textContent = "Add music.mp3";
  if (musicBtn) {
    musicBtn.style.opacity = "0.6";
    musicBtn.title = "Add your song at assets/music.mp3";
  }
});

/* ============================================================
   10. DOCK NAV — active section, scroll progress
   ============================================================ */
const nav = $("#nav");
const dockLinks = $$(".dock__link");
const progressBar = $("#progressBar");
const navSections = ["top", "memories", "second", "letter"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

function setActiveSection() {
  if (!dockLinks.length || !navSections.length) return;
  const line = window.scrollY + window.innerHeight * 0.45;
  let current = navSections[0];
  navSections.forEach((section) => {
    if (section.offsetTop <= line) current = section;
  });
  dockLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.section === current.id);
  });
}

if (nav) {
  dockLinks.forEach((link) => {
    link.addEventListener("click", () => {
      dockLinks.forEach((l) => l.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  });
}

let lastScrollY = window.scrollY;

function updateProgress() {
  setActiveSection();

  const y = window.scrollY;
  const delta = y - lastScrollY;
  if (nav) {
    if (y > 420 && delta > 4) nav.classList.add("is-hidden");
    else if (delta < -4 || y <= 420) nav.classList.remove("is-hidden");
  }
  lastScrollY = y;

  if (!progressBar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
  progressBar.style.transform = `scaleX(${p})`;
}

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

/* ============================================================
   11. SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

function observeReveals() {
  $$(".reveal").forEach((el) => revealObserver.observe(el));
}

observeReveals();

/* ============================================================
   12. COUNTER TRIGGER
   ============================================================ */
const numbersSection = $("#numbers");
if (numbersSection) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter();
          counterObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  counterObserver.observe(numbersSection);
}

/* ============================================================
   13. DESKTOP DETAILS — tilt + cursor glow
   ============================================================ */
if (finePointer && !reduceMotion) {
  $$(".tilt").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });

  const glow = $("#cursorGlow");
  if (glow) {
    window.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      glow.classList.add("is-on");
    }, { passive: true });

    document.addEventListener("pointerleave", () => glow.classList.remove("is-on"));
  }
}
