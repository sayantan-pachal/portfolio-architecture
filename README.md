# Portfolio Architecture

This repository contains the source code for my personal portfolio website, built using **React**, **Tailwind CSS**, and a modular, scalable component architecture.

The project is designed to be clean, reusable, and easy to maintain, with a clear separation between **UI components**, **data**, and **logic**.

---

## 📁 Folder Structure Overview

```txt
src/
│
├── Components/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Parts/
│   │       ├── HomeIntro.jsx
│   │       ├── HomeWork.jsx
│   │       └── HomeEdu.jsx
│   │
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Containers/
│   │       ├── ContactGrid.jsx
│   │       └── ContactForm.jsx
│   │
│   ├── Projects/
│   │   ├── Project.jsx
│   │   └── ProjectGrid/
│   │       └── ProjectGrid.jsx
│   │
│   ├── Resume/
│   │   └── Resume.jsx
│   │
│   ├── Achievements/
│   │   └── Achievements1.jsx
│   │
│   ├── Common/
│   │   └── Logo.jsx
│   │
│   └── Edgecase/
│       └── Edgecase.jsx
│
├── Data/
│   ├── HomeIntro/
│   │   └── homeintro.js
│   ├── Project/
│   │   └── projects.js
│   ├── Contact/
│   │   └── social_contacts.js
│   ├── Education/
│   │   └── educations.js
│   ├── Blog/
│   │   └── blogPosts.js
│   └── About/
│       └── about.js
│
├── styles/
│   └── animations.css
│
├── scrollAnimation.js
│
└── App.jsx
