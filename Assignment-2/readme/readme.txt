Kalyan Venkata Swamy Karnati — Portfolio

Overview
Single-page, semantic portfolio built with HTML5 and an external CSS file only.
Includes a sticky header with anchor offset, responsive layouts, a styled
experience table, colorful testimonials, an image gallery with captions/tags,
and a contact form.

What’s included
- Sections with visible titles: About, Experience, Testimonials, Image Gallery,
  Education, Contact
- About + Quick Info (bigger Aside) with skills, focus areas, and CTA buttons
- Experience table with zebra striping and td[data-role="lead"] highlight
- Testimonials: three gradient cards with hover lift
- Image Gallery: screenshots with captions and tech tags
- Contact form: name, email, message + submit/reset
- Favicons referenced from assets/favicon.svg (PNG/ICO fallbacks supported)

Tech and responsiveness
- Semantic HTML: header, nav, main, section, article, aside, footer
- Flexbox: display:flex, align-items, justify-content, flex-direction,
  flex-wrap, flex (grow/shrink/basis)
- Media queries: iPad (<=768px) and small phones (<=375px)
  * On phones, the table stacks into labeled rows for readability
- Accessibility and UX: skip link, screen-reader helpers, focus styles,
  reduced motion support, anchor offset (scroll-margin-top) for the sticky header
- Dark mode: prefers-color-scheme: dark palette

File structure
index.html
styles.css
README.txt
assets/
  favicon.svg   (optional: favicon-32.png, favicon-16.png, favicon.ico)
images/
  profile image (e.g., profile.jpg)
  project screenshots (e.g., sign lng pic.webp, OIP.webp, ngo.webp, p1.png)

How to run
1) Open index.html in any modern browser.
2) If the favicon doesn’t update after changes, do a hard refresh.

Notes
- Replace gallery images and text with your own project screenshots and blurbs.
- Colors can be adjusted via CSS variables in :root (e.g., --divider, --acc1..4).
