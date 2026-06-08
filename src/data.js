export const navItems = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Projects", href: "projects.html", page: "projects" },
  { label: "Skills", href: "skills.html", page: "skills" },
  { label: "About", href: "about.html", page: "about" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

import { tornado } from "./projects/tornado.js";
import { gridSound } from "./projects/gridsound.js";
import { classBlog } from "./projects/classblog.js";
import { hydrants } from "./projects/hydrants.js";
import { about } from "./about.js";
import { home } from "./home.js";
import { skills } from "./skills.js";
import { contact } from "./contact.js";

export const siteContent = {
  home: home,
  projects: {
    eyebrow: "Featured Work",
    title: "Selected Projects",
    cards: [tornado, gridSound, classBlog, hydrants],
  },
  about: about,
  skills: skills,
  contact: contact,
};
