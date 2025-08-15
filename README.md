# Anthony Edwards — Tribute Website

A fast, single‑page tribute site built with **vanilla HTML/CSS/JS**. It highlights Anthony Edwards’ career, brands, philanthropy, and media through bold visuals, horizontal scroll stories, and interactive endorsement panels.

> **Status:** MVP / desktop‑first. No frameworks. No build step.

---

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Implementation Notes](#implementation-notes)

  * [Hero & Highlight Video](#hero--highlight-video)
  * [Endorsements (inline panels)](#endorsements-inline-panels)
  * [Horizontal Stories](#horizontal-stories)

    * [The Philanthropist](#the-philanthropist)
    * [The Businessman](#the-businessman)
    * [The Man](#the-man)
    * [The Athlete](#the-athlete)
  * [Foot Locker Video Tile](#foot-locker-video-tile)
* [Add/Modify Content](#addmodify-content)
* [Performance & UX](#performance--ux)
* [Accessibility](#accessibility)
* [Known Issues / TODO](#known-issues--todo)
* [Credits & Disclaimer](#credits--disclaimer)
* [License](#license)

---

## Demo

Open `index.html` directly or serve locally (recommended for video autoplay policies). See [Getting Started](#getting-started).

---

## Features

* **Cover hero** with centered title and large key image.
* **Scroll‑reactive highlight video** (gentle zoom based on viewport position).
* **Endorsements carousel** with logo cards (Adidas, Foot Locker, Beats/“BBDD”, Aura, Bose). Clicking a logo expands an **inline panel** and shifts neighboring logos left/right.
* **Three horizontal "sticky" stories** implemented with pure CSS+JS transforms:

  * *The Philanthropist* – image+caption rail populated from a JS array.
  * *The Businessman* – branded campaigns and captions.
  * *The Man* – personal life timeline and values.
* **Appearances collage** (grid of images with captions).
* **Foot Locker ad** card with unmute control and viewport‑aware play/pause via `IntersectionObserver`.
* **Social links** with big visual buttons (Instagram, YouTube).

---

## Tech Stack

* **HTML5** single page
* **CSS3** (desktop‑first; custom layout for sticky horizontal scroll)
* **JavaScript (ES6)** — no frameworks; DOM APIs only

---

## Project Structure

```
.
├── index.html
├── style.css
├── script.js
└── assets/
    ├── images/
    │   ├── Ant-Cover.png
    │   ├── Ant-Philanthropist.png
    │   ├── DFTW.png
    │   ├── AABCA.png
    │   ├── QSC.png
    │   ├── HBCU.png
    │   ├── Luca.png
    │   ├── Ant-Businessman.png
    │   ├── Anta-Claus.png
    │   ├── Fanatics.png
    │   ├── Hisense.png
    │   ├── The-Man-Cover.png
    │   ├── Anthony-Mom.png
    │   ├── GrandMa-Ma.png
    │   ├── Ant-WithSiblings.png
    │   ├── Ant-With-Friend.png
    │   ├── Ant-Straight-Shot.png
    │   ├── Hustle.png
    │   ├── Year-five.png
    │   ├── Starting-5.png
    │   ├── A1-From-Day1.png
    │   ├── Pass-the-rock.png
    │   ├── Insta-cover.png
    │   ├── YouTube-Logo.png
    │   ├── Youtube-Cover.png
    │   ├── adidas-logo.png
    │   ├── Foot-Locker-logo.png
    │   ├── BBDD.png
    │   ├── Aura-logo.png
    │   └── Bose-Logo.png
    └── videos/
        ├── Ant-Highlights.mp4
        ├── Prada-Ad.mp4
        └── Ant-FootLocker.mp4
```

> Keep filenames/paths consistent with the code. Replace placeholders as needed.

---

## Getting Started

### 1) Clone & install

No dependencies. Just ensure assets are in `assets/images` and `assets/videos`.

### 2) Run a local server (recommended)

Modern browsers block autoplay with sound when opening from `file://`. Serve via any simple server:

```bash
# Python 3
python -m http.server 8080
# or
npx serve .
```

Then open `http://localhost:8080`.

### 3) File to edit

All interactive behavior is in **`script.js`**. Styling is **`style.css`**.

---

## Implementation Notes

### Hero & Highlight Video

* `.hero` contains the cover image and a large centered title.
* `.highlights .highlight-video` scales between \~0.9–1.3x on scroll using a simple ratio based on the video’s bounding rect.

### Endorsements (inline panels)

* Logos live inside `.endorsement-logos` → `.logo-container` with a `data-brand` attribute.
* Clicking a logo:

  * Adds `.active` to the clicked card and shifts siblings with `.shift-left`/`.shift-right`.
  * Injects an overlay **panel** (title + multi‑line description) built from the `endorsementInfo` map in `script.js`.
* A modal scaffold exists in HTML (`#endorsement-modal`) with a close button; current interaction uses **inline panels**, not the modal.

### Horizontal Stories

All three sections are built as **sticky containers** with a horizontally scrolling inner track moved via `transform: translate3d(...)` based on vertical scroll progress.

#### The Philanthropist

* HTML scaffold: `.sticky_parent > .sticky > .scroll_section`.
* `script.js` populates the rail from the `images` array. Each slide is a flex row with an image + caption.
* The `transform()` function maps page scroll to a horizontal `translate3d` movement.

#### The Businessman

* HTML scaffold: `.BusinessmanSticky_Parent > .BusinessmanSticky > .BusinessmanScroll_section`.
* Slides are generated from `businessmanImages` (image `src`, `text`, and a size class like `small2`/`big1`).
* `transformBusinessman()` computes `progress` over the sticky parent’s scroll height and moves the track accordingly.

#### The Man

* Similar to Businessman but with its own dataset `ManImages` and sizing logic.
* `sizeManTrack()` sets the sticky parent’s height so vertical distance matches the horizontal track width.

#### The Athlete

* Similar horizontal rail, dataset `athleteImages`.
* Uses `sizeAthleteTrack()` to compute parent height via a `SCROLL_PER_PX` factor for consistent scroll speed.

### Foot Locker Video Tile

* In `.FootLocker-wrap`, the video uses an `IntersectionObserver` to **play when \~60% visible**, pause/reset when out of view, and a floating **Unmute/Mute** button toggles audio.

---

## Add/Modify Content

### Add a new endorsement logo

1. In `index.html`, add a new `.logo-container` with `data-brand="BrandKey"` and the logo image.
2. In `script.js`, add a new entry to `endorsementInfo[BrandKey] = { title, lines: [ ... ] }`.

### Add a new slide to a horizontal section

* **Philanthropist:** push a new image path to the `images` array (and extend the caption logic if needed).
* **Businessman / The Man / The Athlete:** add an object `{ src, text, size }` to the corresponding `*Images` array in `script.js`.
* If the horizontal track overflows more/less, tweak the section’s `SCROLL_PER_PX` or ensure `size*Track()` runs after images are appended.

### Swap the cover, reels, or collage tiles

* Replace the files in `assets/images` / `assets/videos` with matching names. If you rename, update `index.html` and relevant arrays.

---

## Performance & UX

* **No frameworks**, minimal JS, and `transform: translate3d` for smooth GPU‑backed scrolling.
* **IntersectionObserver** prevents off‑screen video from playing.
* **Desktop‑first**; media queries provide basic stacking on small screens. For heavier mobile support, consider:

  * Compressing images/videos and adding `loading="lazy"` for images.
  * Using responsive `srcset`/`sizes` for large imagery.
  * Reducing extremely tall image dimensions in horizontal rails.

---

## Accessibility

* Add descriptive `alt` text for all images (several are placeholders now).
* Ensure sufficient color contrast in captions over imagery.
* Provide keyboard interaction for endorsement panels (currently click/tap only).

---

## Known Issues / TODO

* The **Athlete** block is currently initialized outside the main `DOMContentLoaded` handler. If you move `<script>` to `<head>` or defer loading, wrap that block in a ready callback to avoid null queries.
* Class name **"Athelete"** is intentionally kept for compatibility, but it’s misspelled. Consider renaming consistently to `Athlete` across HTML/CSS/JS.
* Horizontal sections are **content‑size sensitive**; when adding very wide images, re‑run/tweak the `SCROLL_PER_PX` constants.
* Mobile scroll can feel heavy due to large assets; ship compressed media.

---

## Credits & Disclaimer

* This is a **fan‑made, educational** project.
* All trademarks, logos, and brand names (Adidas, Foot Locker, Bose, etc.) are the property of their respective owners and are used here for descriptive purposes only.
* Ensure you have the right to use any images and video clips included in `assets/`.

---

## License

MIT © Your Name
