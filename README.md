# THANG — Graphic Design Portfolio V4

V4 includes:
- Home / Projects / Contact as separate pages
- Featured projects on Home
- Dynamic project case study page
- GSAP motion
- Responsive layout for desktop / tablet / mobile
- Project images preserve their ORIGINAL ASPECT RATIO
- No forced crop

## Run locally
1. Extract ZIP.
2. Open folder in VS Code.
3. Install Live Server by Ritwick Dey.
4. Open `index.html`.
5. Right-click → Open with Live Server.

## Folder structure
```text
thang-graphic-design-portfolio-v4/
├── index.html
├── projects.html
├── project.html
├── contact.html
├── styles.css
├── script.js
├── README.md
└── images/
```

## Add images from your computer
Create a folder for each project, for example:
```text
images/
└── cmc-telecom/
    ├── cover.jpg
    ├── 01.jpg
    ├── 02.jpg
    ├── 03.jpg
    └── 04.jpg
```
On Mac, drag images from Finder directly into that folder in the VS Code Explorer.

Do NOT use a local absolute path like:
```text
/Users/yourname/Desktop/cover.jpg
```
Use:
```text
images/cmc-telecom/cover.jpg
```

## Add a complete project
Open `script.js` and add an object inside `const projects = [...]`:
```js
{
  title: "CMC TELECOM",
  category: "branding",
  label: "Brand Identity",
  year: "2026",
  role: "Graphic Designer / Art Direction",
  image: "images/cmc-telecom/cover.jpg",
  description: "A complete visual identity system for CMC Telecom.",
  gallery: [
    "images/cmc-telecom/01.jpg",
    "images/cmc-telecom/02.jpg",
    "images/cmc-telecom/03.jpg",
    "images/cmc-telecom/04.jpg"
  ]
},
```

## Home featured projects
Home automatically shows the FIRST 3 projects in `projects`.
Move a project into the first 3 positions if you want it featured.

## Projects page
The Projects page automatically shows every object in `projects`.
Current filter categories:
- `branding`
- `digital`
- `editorial`

## Case study
Click any project and it opens:
```text
project.html?i=0
```
You do not create separate HTML files for projects. `project.html` reads the selected project and generates the case study automatically.

## Original image ratio / automatic resizing
V4 uses:
```css
.project-media img,
.case-hero img,
.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
```
So:
- portrait stays portrait
- landscape stays landscape
- square stays square
- image width adapts to its container
- height is automatically calculated from the original aspect ratio
- no image is cropped by the layout

Note: this is responsive browser resizing. The original source image file itself is not physically rewritten or compressed.

## Recommended export size
- Cover: around 1800–2400 px wide
- Case study: around 1800–3000 px wide
- JPG for photos
- WebP for smaller file size
- PNG when transparency is needed

Avoid using raw 8K images directly unless necessary because they can make the portfolio slow.

## Responsive breakpoints
- Desktop: above 1100 px
- Small desktop/tablet: 1100 px and below
- Tablet: 820 px and below
- Mobile: 560 px and below

Mobile includes:
- bottom navigation
- single-column projects
- responsive typography
- hidden desktop cursor glow/orbit graphic
- image aspect ratio still preserved

## Change email and socials
Search the HTML files for:
```text
thangdoan01042002@gmail.com
https://www.behance.net/thngon17
https://www.linkedin.com/in/thagdoan/
https://www.facebook.com/banh3tee/
https://www.instagram.com/thag_doan/
```
Replace with your real information.

## Change fonts
At the top of `styles.css`:
```css
--font-display: "Space Grotesk", sans-serif;
--font-body: "Manrope", sans-serif;
--font-mono: "DM Mono", monospace;
```
You can replace these with another Google Font or a local `@font-face`.


---

## V4.1 layout update

- Home marquee is now a seamless infinite loop with two identical ticker groups.
- Home featured projects: 2 cards per row on desktop/tablet, 1 per row on phones.
- Projects page: 2 cards per row on desktop/tablet, 1 per row on phones.
- All project CARD THUMBNAILS are fixed to 16:9 and use `object-fit: cover`.
- Case Study images still use `width: 100%; height: auto; object-fit: contain;`, so artwork inside a case study keeps its original aspect ratio.


## V4.2 marquee fix

The Home service ticker now uses two identical long ticker sets.
Each set contains four repeated service sequences, so one complete set is wider
than normal desktop and ultrawide viewports. The animation moves exactly one
set (`-50%` of the full duplicated track), producing a seamless continuous loop
with no empty gap before the reset.

Project layout remains:
- 2 projects per row on desktop/tablet
- 1 project per row on mobile
- project thumbnail ratio: 16:9
- case-study images preserve their original aspect ratio


## V4.3 contact information

Configured contact details:

- Email: thangdoan01042002@gmail.com
- Behance: https://www.behance.net/thngon17
- LinkedIn: https://www.linkedin.com/in/thagdoan/
- Facebook: https://www.facebook.com/banh3tee/
- Instagram: https://www.instagram.com/thag_doan/


## V4.4 — grouped text / bullets fix

For multiple bullet topics inside ONE section, use lowercase `groups`:

```js
{
  type: "text",
  title: "Solution",
  groups: [
    {
      subtitle: "Meal forecasting",
      text: "Optional short description.",
      bullets: ["Point one", "Point two"]
    },
    {
      subtitle: "Volunteer management",
      bullets: ["Point one", "Point two"]
    }
  ]
}
```

V4.4 also accepts the older accidental `Groups` spelling and `description` inside a group,
but new content should use `groups` + `text` for consistency.

---

## GitHub Pages deployment

This repository includes `.github/workflows/pages.yml`.

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open the **Actions** tab and wait for `Deploy portfolio to GitHub Pages` to finish.
5. GitHub will show the public Pages URL after deployment.

Every new push to the `main` branch will deploy the latest portfolio automatically.


## V4.5 — Dynamic Categories

Project filter tabs are now generated automatically from `category` in `script.js`.

Supported:

```js
category: "UI/UX"
```

Multiple categories:

```js
category: "UI/UX / Branding"
```

This is automatically treated as:

```text
UI/UX
Branding
```

You can also use an array:

```js
category: ["UI/UX", "Branding"]
```

The website automatically generates tabs such as:

```text
ALL / UI/UX / BRANDING / GRAPHIC DESIGN
```

You no longer need to edit `projects.html` when adding a new category.

Important: the automatic string separator is ` / ` with spaces.
Therefore `UI/UX` remains one category, while `UI/UX / Branding`
becomes two categories.
# folio
# folio
