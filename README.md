# Lab: Build Your One-Page Portfolio

Welcome to your first portfolio lab! In this assignment, you'll build a **one-page personal portfolio** using everything you've learned so far in HTML, CSS, and JavaScript.

This isn't just a throwaway exercise — **you'll keep updating this site as the cohort goes on.** Every new project, every new skill, every new tool you pick up should find its way onto this page. Build it with that in mind from day one.

---

## The Big Idea

A portfolio page is the first impression a recruiter, employer, or collaborator gets of you. Before you write a single tag, take 10 minutes and think about:

- **Who is this page for?** A hiring manager? A potential teammate? Yourself?
- **What do you want them to know about you within 5 seconds of landing on the page?**
- **What sections do you actually need?** (Hint: every section should earn its place.)
- **How will this look in 6 weeks when you've added 4 more projects and learned React?** Design something you can grow into, not something you'll have to throw away.

There is no single "right" portfolio. Yours should look like *you*.

---

## What You're Starting With

You have four files:

- `README.md` — this file
- `index.html` — a bare HTML5 boilerplate. The `<body>` is empty on purpose. You build it.
- `styles.css` — empty. You style it.
- `script.js` — a small starter for the one required JS interaction (see below).

---

## Required Goals ✅

You must complete all of these to consider the lab done.

### HTML
- [ ] Page has a clear `<title>` (not "Document")
- [ ] Page uses semantic HTML — at minimum: `<header>`, `<main>`, `<section>`, `<footer>`
- [ ] **Header / Hero** section with your name and a one-line tagline (what kind of developer are you becoming?)
- [ ] **About Me** section — a short paragraph in your own voice
- [ ] **Skills** section — a list (`<ul>` or `<ol>`) of technologies you've worked with so far
- [ ] **Projects** section — at least one project with: a title, a short description, and a link (use `<a href="">`). It's okay if it's a class lab.
- [ ] **Contact** section — at least one way to reach you (email link using `mailto:` or a link to your GitHub/LinkedIn)
- [ ] At least one image on the page with meaningful `alt` text

### CSS
- [ ] All styling lives in `styles.css` (no inline styles, no `<style>` tag in the HTML)
- [ ] You've set a font family — don't ship the default Times New Roman
- [ ] You've used a color palette of at least **3 intentional colors** (background, text, accent)
- [ ] You've used the **box model** — margin, padding, and at least one border somewhere
- [ ] Sections are visually distinct from one another (spacing, background, or borders)
- [ ] Links and headings are styled — they should not look like default browser styles

### JavaScript
- [ ] The provided toggle works (light/dark mode, or whatever you adapt it to)
- [ ] You've added at least **one `console.log()`** somewhere in `script.js` that prints a message confirming the script loaded — open DevTools to verify

---

## Stretch Goals 🚀

Pick whichever ones excite you. Don't try to do all of them — pick 1 or 2 and do them well.

### HTML / Content stretches
- [ ] Add a **profile picture** (or an avatar / illustration / logo that represents you)
- [ ] Add a **resume download link** (`<a href="resume.pdf" download>`)
- [ ] Use an `<iframe>` or embedded video to showcase a project demo
- [ ] Add social media icons (you can use emoji 📧 🐙 💼 if you don't want to deal with icon libraries yet)

### CSS stretches
- [ ] Use **Flexbox** to lay out your skills or projects section in a row
- [ ] Use **CSS Grid** for a multi-column projects gallery
- [ ] Add a `:hover` effect on your project cards or links
- [ ] Add a custom Google Font
- [ ] Make it look reasonable on a phone (resize your browser narrow — does it still work?)

### JavaScript stretches
- [ ] Build your projects section from an **array of project objects** in JS, looping through them and creating DOM elements (`document.createElement`, `appendChild`)
- [ ] Add a "Show more / Show less" button on your About section
- [ ] Add a typewriter effect on your tagline
- [ ] Add a button that prints a fun fact about you to an element on the page when clicked

---

## Think Ahead: Designing for Growth

Before you finalize anything, ask yourself:

- **Where does the next project go?** If your projects section only fits 2 cards nicely, what happens when you have 8?
- **Where do new skills go?** If you learn React next month, is there an obvious spot to add it?
- **What stays the same?** Your name, your photo, your contact info — these are stable. Build those parts solidly.
- **What changes often?** Projects and skills. Make these sections easy to update — ideally just by adding one more `<li>` or one more `<div>`.

A good portfolio is a **living document.** The version you submit this week should be version 1 of something you'll still be iterating on at graduation.

---

## Lesson References

You've already learned everything you need for the required goals. If you get stuck, go back to:

- HTML Fundamentals — semantic tags, links, images, lists
- JavaScript Intro & More JS — variables, functions, arrays
- DOM Slides — `querySelector`, `addEventListener`, `classList`

---

## Submission

When you're done:
1. Make sure all 4 files are in your repo
2. Open `index.html` in your browser one last time and click around
3. Open DevTools and confirm there are no red errors in the console
4. Push to GitHub

Have fun with this one. It's yours.
