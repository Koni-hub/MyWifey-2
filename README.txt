Happy 2nd Monthsary, Wifey 💗 — website
========================================

HOW TO OPEN
-----------
Double-click "index.html" — that's it!

Note: keep the whole folder together (index.html, css, js, assets).
The page needs them all in the same place.

THE DESIGN — "midnight cinema"
------------------------------
This is a brand-new look from the 1st monthsary site:

- Dark plum / navy night sky with a soft starfield and shooting stars
- Gold serif typography (Cormorant Garamond) and warm ember accents
- A fixed glass DOCK at the bottom for navigation (Home · Story ·
  Frames · Letter). It highlights the section you're reading, and it
  slides away while you scroll down, then comes back when you scroll up.
- A framed "favorite frame" photo clipped into a gold-edged heart
- A vinyl-style music player in the top bar (the disc spins while the
  song plays)
- A filmstrip "archive" gallery you can drag or scroll sideways
- A masonry grid for the new month-two photos
- A frameless lightbox with arrow-key navigation
- Little extras: scroll progress line, blur-in reveals, cursor glow on
  desktop, hearts that burst when you tap "Send hearts"

Our story so far
----------------
Started:       September 5, 2026 · 11:34 PM
2nd monthsary: November 5, 2026 · 11:34 PM

The live counter (days / hours / minutes / seconds) is calculated from
that start date in js/script.js:

    const START = new Date("2026-09-05T23:34:00+08:00").getTime();

Change that line only if the date ever needs to change.

PHOTOS
------
All the photos from the 1st monthsary site were copied into "assets" —
nothing else to add. To swap or add photos, drop files named
photo1.jpg, photo2.png, etc. into the "assets" folder and list them in
CONFIG.photos in js/script.js. .jpg, .png and .jpeg all work.

These make up the sideways "archive" filmstrip ("Every frame we've kept").

NEW 2ND MONTHSARY PHOTOS (as many as you want)
----------------------------------------------
The new photos live in the "Month two, in frames" masonry section.
Just save them in the "assets" folder with these names:

    assets\second1.jpg
    assets\second2.jpg
    assets\second3.jpg
    ...and so on

.jpg, .png and .jpeg all work.

You do NOT need to edit any code to add photos. Empty slots are hidden,
and if there are no second* photos at all, the whole section stays
hidden.

Up to 24 photos are checked by default. If you have more, open
js/script.js and change:

    const SECOND_PHOTOS = 24;

Captions for photos second1–second20 are already written in
SECOND_CAPTIONS in js/script.js:

    const SECOND_CAPTIONS = {
      1: "Kahit sa Roblox, yakap pa rin kita 🌋💙",
      2: "Strawberry hat and her little boy 🍓📱",
      ...
    };

The number is the photo number (1 = second1.jpg). Without a caption, it
shows "2nd monthsary 💗".

Until a photo is added, the slot shows a placeholder with the expected
filename, so the page still looks good.

MUSIC — OUR MONTHSARY SONG
--------------------------
1. Put your song in the "assets" folder and name it exactly:

       assets\music.mp3

   (Overwrite the old file. The page reads music.mp3, so no code change
   is needed.)
2. Open js/script.js and edit CONFIG.music at the top so the vinyl
   player shows the right name:

       music: {
         src: "assets/music.mp3",
         title: "Your Song Title",
         artist: "Artist Name",
       },

The player shows the title and artist, and the disc spins while the
song plays. If the file is missing, the player says "Add music.mp3"
instead of silently failing.

The song starts automatically after you press "Begin" on the intro
title card. If the browser blocks autoplay, tap the music button once.

NAVIGATION (the bottom dock)
----------------------------
The floating dock at the bottom of the screen has four links:

    Home   -> the intro / hero
    Story  -> the featured photo section
    Frames -> the month-two photo grid
    Letter -> the letters

- The active link is filled in gold and follows your scroll position.
- The dock hides while scrolling down and returns when you scroll up.
- On phones it becomes a full-width row of four icons.

To change a link, edit the <nav class="dock"> block in index.html and
the "data-section" values (they must match the section ids).

HOW TO EDIT THE LETTERS (in index.html)
----------------------------------------
- First letter  = short and sweet (visible right away)
- Second letter = the deeper one (hidden behind the
                  "Read the deeper one" button)

Single-clicking that button opens it and scrolls to the letter;
clicking "Hide it for now" closes it again.

OTHER EDITABLE TEXT (index.html)
--------------------------------
- Couple names: search for "Koni" and "Yana" (top bar, dock, footer,
  closing)
- Hero text, section titles, the six reason cards, endings
- Closing line says "See you on our 3rd…" — update it next month
- The intro card says "Two Months" and "headphones on, my love"

FILES
-----
    index.html      the whole page
    css/style.css   design / animations / responsive layout
    js/script.js    config, starfield, galleries, lightbox, letters,
                    music, dock navigation, counters
    assets/         photos + music.mp3

NOTE
----
The 1st monthsary site is still in the folder next to this one
("1st Monthsary"), untouched.
