import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        projects: "projects.html",
        skills: "skills.html",
        about: "about.html",
        contact: "contact.html",
        resume: "resume.html",
      },
    },
  },
});
