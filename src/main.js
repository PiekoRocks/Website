import React from "react";
import { createRoot } from "react-dom/client";
import { navItems, siteContent } from "./data.js";
import { renderHeader } from "./templates.js";

const el = React.createElement;
const page = document.body.dataset.page || "home";
const appRoot = document.getElementById("app");

function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButton(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateThemeButton(nextTheme);
}

function updateThemeButton(theme) {
  const button = document.querySelector(".theme-toggle");
  if (!button) {
    return;
  }

  button.textContent = theme === "dark" ? "☀️" : "🌙";
  button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
}

function attachThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  if (button) {
    button.addEventListener("click", toggleTheme);
  }
}

function buildNavItems(activePage) {
  return navItems.map((item) => ({
    ...item,
    active: item.page === activePage,
  }));
}

function isExternalLink(href) {
  return typeof href === "string" && /^https?:\/\//.test(href);
}

function CardGrid({ items, className }) {
  return el(
    "div",
    { className },
    items.map((item) =>
      el(
        "article",
        { className: "project-card", key: item.title },
        el("span", { className: "card-meta" }, item.category),
        el("h3", null, item.title),
        el("p", null, item.description),
        el(
          "div",
          { className: "card-tags" },
          item.tags.map((tag) => el("span", { key: tag }, tag))
        )
      )
    )
  );
}

function TagList({ items }) {
  return el(
    "div",
    { className: "tag-list" },
    items.map((tag) => el("span", { key: tag }, tag))
  );
}

function HomePage() {
  const content = siteContent.home;
  return el(
    React.Fragment,
    null,
    el(
      "section",
      { className: "hero section-card" },
      el(
        "div",
        { className: "hero-copy" },
        el("p", { className: "eyebrow" }, content.eyebrow),
        el("h1", null, content.title),
        el("p", { className: "hero-text" }, content.description),
        el(
          "div",
          { className: "hero-actions" },
          el(
            "a",
            { className: "button button-primary", href: content.primaryAction.href },
            el(
              "span",
              { className: "link-with-icon" },
              el("span", null, content.primaryAction.label),
              el("span", { className: "link-icon" }, el(LinkIcon, { type: "projects" }))
            )
          ),
          el(
            "a",
            { className: "button button-secondary", href: content.secondaryAction.href },
            el(
              "span",
              { className: "link-with-icon" },
              el("span", null, content.secondaryAction.label),
              el("span", { className: "link-icon" }, el(LinkIcon, { type: "mail" }))
            )
          )
        ),
        el(
          "div",
          { className: "stats", "aria-label": "Quick facts" },
          content.stats.map((stat) =>
            el(
              "div",
              { key: stat.label },
              el("strong", null, stat.value),
              el("span", null, stat.label)
            )
          )
        )
      ),
      el(
        "aside",
        { className: "hero-panel" },
        el(
          "div",
          { className: "profile-card" },
          el("span", { className: "profile-badge" }, content.profile.badge),
          el("h2", null, content.profile.title),
          el("p", null, content.profile.description),
          el(
            "ul",
            null,
            content.profile.bullets.map((bullet) => el("li", { key: bullet }, bullet))
          )
        )
      )
    )
  );
}

function SectionPage({ eyebrow, title, children, className = "section-block" }) {
  return el(
    "section",
    { className },
    el(
      "div",
      { className: "section-heading" },
      el("p", { className: "eyebrow" }, eyebrow),
      el("h1", null, title)
    ),
    children
  );
}

function ProjectsPage() {
  const content = siteContent.projects;
  return el(
    React.Fragment,
    null,
    el(
      "div",
      { className: "section-heading" },
      el("p", { className: "eyebrow" }, content.eyebrow),
      el("h1", null, content.title)
    ),
    content.cards.map((item) => el(ProjectSection, { item, key: item.title }))
  );
}

function ProjectSection({ item }) {
  const hasScreenshots = Boolean(item.media && item.media.screenshots && item.media.screenshots.length);
  const hasEmbed = Boolean(item.media && item.media.embedHtml);
  const hasVideo = Boolean(item.videoSrc);

  return el(
    "section",
    { className: "section-card project-section" },
    el(
      "div",
      { className: "section-heading compact" },
      el("p", { className: "eyebrow" }, item.category),
      el("h2", null, item.title)
    ),
    el(
      "div",
      { className: "split-section project-body" },
      el(
        "div",
        { className: "project-copy" },
        el("p", null, item.description),
        item.summaryBullets &&
          el(
            "ul",
            { className: "proj-summary" },
            item.summaryBullets.map((b) => el("li", { key: b }, b))
          ),
        el(
          "div",
          { className: "card-tags" },
          item.tags && item.tags.map((t) => el("span", { key: t }, t))
        ),
        el(
          "div",
          { className: "project-actions" },
          item.demoLink &&
            el(
              "a",
              {
                href: item.demoLink,
                className: "button button-secondary",
                target: isExternalLink(item.demoLink) ? "_blank" : undefined,
                rel: isExternalLink(item.demoLink) ? "noreferrer noopener" : undefined,
              },
              el(
                "span",
                { className: "link-with-icon" },
                el("span", null, "Live demo"),
                el("span", { className: "link-icon" }, el(LinkIcon, { type: "external" }))
              )
            ),
          item.repo &&
            el(
              "a",
              {
                href: item.repo,
                className: "button button-secondary",
                target: isExternalLink(item.repo) ? "_blank" : undefined,
                rel: isExternalLink(item.repo) ? "noreferrer noopener" : undefined,
              },
              el(
                "span",
                { className: "link-with-icon" },
                el("span", null, "Repository"),
                el("span", { className: "link-icon" }, el(LinkIcon, { type: "github" }))
              )
            ),
          item.externalSiteInput && el("div", { className: "external-input" }, el("label", null, "External site:"), el("input", { type: "text", placeholder: "https://example.com" }))
        ),
        item.backend && el("p", { className: "proj-backend" }, "Backend: " + item.backend),
        item.notes &&
          el(
            "div",
            { className: "proj-notes" },
            Object.keys(item.notes).map((k) =>
              el(
                "div",
                { key: k, className: "proj-note-item" },
                el("strong", null, k + ": "),
                el("span", null, item.notes[k])
              )
            )
          )
      ),
      el(
        "aside",
        { className: "project-media" },
        // render screenshots first (above the player)
        hasScreenshots &&
          el(
            "div",
            { className: "proj-screenshots" },
            item.media.screenshots.map((s) => el("img", { key: s, src: s, alt: item.title + " screenshot" }))
          ),
        // then render embed or video
        (hasEmbed || hasVideo || !hasScreenshots) &&
          el(
          "div",
          { className: "embed-wrap" },
          hasEmbed
            ? el("div", { dangerouslySetInnerHTML: { __html: item.media.embedHtml } })
            : hasVideo
            ? el("video", { controls: true, src: item.videoSrc })
            : el("div", { className: "media-placeholder" }, "Media placeholder")
        )
      )
    )
  );
}

function SkillsPage() {
  const content = siteContent.skills;
  return el(
    "section",
    { className: "section-card skills-card" },
    el(
      "div",
      { className: "section-heading compact" },
      el("p", { className: "eyebrow" }, content.eyebrow),
      el("h1", null, content.title)
    ),
    el(TagList, { items: content.tags })
  );
}

function AboutPage() {
  const content = siteContent.about;
  return el(
    "section",
    { className: "section-card about-card" },
    el(
      "div",
      { className: "section-heading compact" },
      el("p", { className: "eyebrow" }, content.eyebrow),
      el("h1", null, content.title)
    ),
    el(
      "div",
      { className: "split-section" },
      el(
        "div",
        { className: "about-content" },
        content.paragraphs.map((paragraph) => el("p", { key: paragraph }, paragraph))
      ),
      el(EducationList, { items: content.education })
    )
  );
}

function EducationList({ items }) {
  if (!items || !items.length) return null;
  return el(
    "div",
    { className: "education-list" },
    items.map((item) =>
      el(
        "div",
        { className: "education-item", key: item.institution + item.degree },
        el("h3", null, item.degree),
        el(
          "p",
          { className: "edu-meta" },
          `${item.institution} · ${item.location} (${item.start}–${item.end})`
        ),
        el(
          "ul",
          null,
          item.details && item.details.map((d) => el("li", { key: d }, d))
        )
      )
    )
  );
}

function LinkIcon({ type }) {
  const iconProps = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "mail":
      return el(
        "svg",
        iconProps,
        el("rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }),
        el("path", { d: "M3 7l9 6 9-6" })
      );
    case "github":
      return el(
        "svg",
        iconProps,
        el("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6-1.5 6-6.8A5.3 5.3 0 0 0 20 5.1 4.9 4.9 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A4.9 4.9 0 0 0 5 5.1a5.3 5.3 0 0 0-1.1 3.6c0 5.3 3 6.5 6 6.8a3.4 3.4 0 0 0-.9 2.6V22" })
      );
    case "linkedin":
      return el(
        "svg",
        iconProps,
        el("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
        el("rect", { x: 2, y: 9, width: 4, height: 12 }),
        el("circle", { cx: 4, cy: 4, r: 2 })
      );
    case "resume":
      return el(
        "svg",
        iconProps,
        el("path", { d: "M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" }),
        el("polyline", { points: "14 2 14 8 20 8" }),
        el("line", { x1: 9, y1: 13, x2: 15, y2: 13 }),
        el("line", { x1: 9, y1: 17, x2: 15, y2: 17 })
      );
    case "projects":
      return el(
        "svg",
        iconProps,
        el("rect", { x: 3, y: 3, width: 7, height: 7, rx: 1 }),
        el("rect", { x: 14, y: 3, width: 7, height: 7, rx: 1 }),
        el("rect", { x: 3, y: 14, width: 7, height: 7, rx: 1 }),
        el("rect", { x: 14, y: 14, width: 7, height: 7, rx: 1 })
      );
    case "external":
      return el(
        "svg",
        iconProps,
        el("path", { d: "M14 3h7v7" }),
        el("path", { d: "M10 14L21 3" }),
        el("rect", { x: 3, y: 7, width: 14, height: 14, rx: 2 })
      );
    default:
      return null;
  }
}

function ContactPage() {
  const content = siteContent.contact;
  return el(
    "section",
    { className: "section-card contact-card" },
    el(
      "div",
      { className: "section-heading compact" },
      el("p", { className: "eyebrow" }, content.eyebrow),
      el("h1", null, content.title)
    ),
    el("p", { className: "contact-intro" }, content.description),
    el(
      "div",
      { className: "contact-links" },
      content.links.map((link) =>
        el(
          "a",
          {
            key: link.label,
            href: link.href,
            target: link.href.startsWith("http") ? "_blank" : undefined,
            rel: link.href.startsWith("http") ? "noreferrer noopener" : undefined,
          },
          el("span", { className: "contact-link-inner" },
            el("span", { className: "contact-icon" }, el(LinkIcon, { type: link.icon })),
            el("span", null, link.label)
          )
        )
      )
    )
  );
}

function ResumePage() {
  const resumePath = "documents/Johnson-Resume.pdf";
  return el(
    "section",
    { className: "section-card resume-card" },
    el(
      "div",
      { className: "section-heading compact" },
      el("p", { className: "eyebrow" }, "Resume"),
      el("h1", null, "Nico Johnson Resume")
    ),
    el(
      "p",
      { className: "contact-intro" },
      "Viewing in-page for convenience. If your browser blocks embedded PDFs, use the open link option."
    ),
    el(
      "div",
      { className: "resume-viewer" },
      el("iframe", {
        src: resumePath,
        title: "Resume PDF",
        loading: "lazy",
        className: "resume-frame",
      })
    ),
    el(
      "a",
      { className: "button button-secondary", href: resumePath, target: "_blank", rel: "noreferrer noopener" },
      el(
        "span",
        { className: "link-with-icon" },
        el("span", null, "Open PDF in new tab"),
        el("span", { className: "link-icon" }, el(LinkIcon, { type: "external" }))
      )
    )
  );
}

function renderPageContent() {
  switch (page) {
    case "projects":
      return el(ProjectsPage);
    case "skills":
      return el(SkillsPage);
    case "about":
      return el(AboutPage);
    case "contact":
      return el(ContactPage);
    case "resume":
      return el(ResumePage);
    case "home":
    default:
      return el(HomePage);
  }
}

if (appRoot) {
  const headerRoot = document.getElementById("site-header");
  if (headerRoot) {
    headerRoot.innerHTML = renderHeader(buildNavItems(page));
  }

  const app = createRoot(appRoot);
  app.render(renderPageContent());

  initTheme();
  attachThemeToggle();
}
