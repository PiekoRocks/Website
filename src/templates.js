import Handlebars from "handlebars";

const headerTemplateSource = `
<header class="topbar">
  <a class="brand" href="index.html">Portfolio</a>
  <nav class="nav-links" aria-label="Primary">
    {{#each navItems}}
      <a href="{{href}}" {{#if active}}class="active" aria-current="page"{{/if}}>{{label}}</a>
    {{/each}}
  </nav>
</header>
`;

const headerTemplate = Handlebars.compile(headerTemplateSource);

export function renderHeader(navItems) {
  return headerTemplate({ navItems });
}
