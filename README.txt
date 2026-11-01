Happy 2nd Monthsary, Wifey 💗 — website
========================================

HOW TO OPEN
-----------
Double-click "index.html" — that's it!

Our story so far
----------------
Started:       September 5, 2026 · 11:34 PM
2nd monthsary: November 5, 2026 · 11:34 PM
(That date is written in index.html inside the "#counter" section.)

PHOTOS
------
All the photos from the 1st monthsary site were copied into "assets" —
nothing else to add. To swap or add photos, drop files named
photo1.jpg, photo2.png, etc. into the "assets" folder and list them in
CONFIG.photos in js/script.js. .jpg, .png and .jpeg all work.

NEW 2ND MONTHSARY PHOTOS (as many as you want)
----------------------------------------------
There is a separate gallery called "Our 2nd monthsary 📸" for the new
photos. Just save them in the "assets" folder with these names:

    assets\second1.jpg
    assets\second2.jpg
    assets\second3.jpg
    ...and so on

.jpg, .png and .jpeg all work. Every photo gets a small "2nd Monthsary"
label on its corner automatically.

You do NOT need to edit any code. Empty slots are hidden, and if there
are no second*.jpg photos at all, the whole section stays hidden.

Up to 24 photos are checked by default. If you have more, open
js/script.js and change:

    const SECOND_PHOTOS = 24;

Captions for all 20 photos (second1–second20) are already written in
SECOND_CAPTIONS in js/script.js. Just edit the lines there to change
them:

    const SECOND_CAPTIONS = {
      1: "Kahit sa Roblox, yakap pa rin kita 🌋💙",
      2: "Strawberry hat and her little phone 🍓📱",
      ...
    };

The number is the photo number (1 = second1.jpg). Without a caption,
it shows "2nd monthsary 💗".

Until a photo is added, the slot shows a pink placeholder with the
expected filename, so the page still looks good.

HOW TO EDIT (all in js/script.js, top of the file)
---------------------------------------------------
- CONFIG.photos     -> change captions or add/remove photos.

HOW TO EDIT THE LETTERS (in index.html)
----------------------------------------
- First letter  = short and sweet (visible right away)
- Second letter = the deeper one (hidden behind the
                  "Read the deeper one" button)

MUSIC (optional)
----------------
"assets/music.mp3" was copied from the 1st monthsary site, so the ♪
button in the top-right already works. Swap the file to change the song.

OTHER EDITABLE TEXT (index.html)
--------------------------------
- Couple names: search for "Koni" and "Yana" (nav, footer, closing)
- Hero subtitle, section titles, reason cards, captions
- Closing line says "see you on our 3rd…" — update it next month

FILES
-----
    index.html      the whole page
    css/style.css   design / animations
    js/script.js    gallery, letters, hearts, music
    assets/         photos + music.mp3

NOTE
----
The 1st monthsary site is still in the folder next to this one
("1st Monthsary"), untouched.
