# WEBC Front-End 

Practical exercises from the softawe developer course.

## Structure

```
WEBC_FRONT/
├── Docs/              # Course materials (PDFs, slides, Git reference)
├── PL02/              # HTML5 — page structure & semantic elements
├── PL03/              # HTML5 — forms, media, multimedia
├── PL04/              # CSS — layout, selectors, styling
├── PL05/              # CSS — positioning, FontAwesome, external fonts
└── PL06/              # SASS/SCSS — variables, nesting, compilation
```

---

## Exercises overview

| Folder | Topic | Technologies | Key concepts |
|--------|-------|--------------|--------------|
| **PL02** | HTML5 structure | HTML | Semantic elements, SVG images, social links |
| **PL03** | HTML5 media & forms | HTML | Audio, video, iframes, forms, multimedia embeds |
| **PL04** | CSS fundamentals | HTML, CSS | Selectors, box model, layout, responsive styling |
| **PL05** | CSS advanced | HTML, CSS, FontAwesome | Position (`fixed`/`sticky`), icon fonts, Google Fonts |
| **PL06** | SASS/SCSS | HTML, CSS, SCSS | Variables, nesting, mixins, `.scss` compilation |

---

## Tech

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white)

---

## Docs included

The `/Docs` folder contains course materials covering the full front-end roadmap:

| File | Topic |
|------|-------|
| `PL00` | Environment setup |
| `PL01` | Git & GitHub |
| `PL02–04` | HTML5 |
| `PL05–06` | CSS & SASS/SCSS |
| `PL07` | Bootstrap |
| `PL08–11` | JavaScript & DOM & JSON |
| `PL12` | TypeScript |

---

## How to run

No build step needed — open any `.html` file directly in the browser.

```bash
# Clone the repo
git clone https://github.com/paulaguollo/WEBC_FRONT.git

# Open an exercise
open PL05/index.html
```

For PL06 (SCSS), compile first:

```bash
sass PL06/style.scss PL06/style.css
```

---

*Made during the Software Developer course · Porto, Mar–Dec 2026*
