const schoolProjects = [
  {
    title: "Lorem Ipsum Dolor",
    category: "Featured Project",
    description:
      "Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Consectetur Adipiscing",
    category: "Featured Project",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Sed Do Eiusmod Tempor",
    category: "Featured Project",
    description:
      "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    tags: ["Python", "Data Science", "API"],
  },
];

const coolThings = [
  {
    title: "Ullamco Laboris Nisi",
    category: "Creation",
    description:
      "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    tags: ["Design", "UI/UX", "Web"],
  },
  {
    title: "Velit Esse Cillum",
    category: "Creation",
    description:
      "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.",
    tags: ["Development", "Tool", "Open Source"],
  },
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "UI/UX Design",
  "Database Design",
  "Problem Solving",
  "Collaboration",
];

function createCard(item, className) {
  const article = document.createElement("article");
  article.className = className;

  const meta = document.createElement("span");
  meta.className = "card-meta";
  meta.textContent = item.category;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const tagList = document.createElement("div");
  tagList.className = "card-tags";
  item.tags.forEach((tag) => {
    const tagItem = document.createElement("span");
    tagItem.textContent = tag;
    tagList.append(tagItem);
  });

  article.append(meta, title, description, tagList);
  return article;
}

function renderCards(items, containerId, className) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.replaceChildren(...items.map((item) => createCard(item, className)));
}

function renderTags(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.replaceChildren(
    ...items.map((item) => {
      const tag = document.createElement("span");
      tag.textContent = item;
      return tag;
    })
  );
}

renderCards(schoolProjects, "project-grid", "project-card");
renderCards(coolThings, "creation-grid", "creation-card");
renderTags(skills, "skill-tags");
