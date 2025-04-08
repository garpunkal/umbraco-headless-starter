import { c as createAstro, a as createComponent, b as addAttribute, r as renderTemplate, d as renderComponent, u as unescapeHTML, e as Fragment, f as renderSlot, g as renderHead, m as maybeRenderHead } from '../chunks/astro/server_DMckTo2D.mjs';
import 'kleur/colors';
/* empty css                                 */
import { createClient, createConfig } from '@hey-api/client-fetch';
export { renderers } from '../renderers.mjs';

const userAgents = [
  // this must always be the first element here!
  {
    name: "woff",
    ua: "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko"
  },
  // from: https://github.com/fontsource/google-font-metadata/blob/main/data/user-agents.json
  {
    name: "woff2",
    ua: 'Mozilla/5.0 (Windows NT 6.3; rv:39.0) Gecko/20100101 Firefox/44.0"'
  }
];
function downloadFontCSS(url) {
  const fontDownloads = Promise.all(
    userAgents.map((entry) => {
      return fetch(url, { headers: { "User-Agent": entry.ua } }).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.text();
      }).then(
        (t) => t.replace(/  +/g, "").replace(/\t+/g, "").replace(/\n+/g, "")
      );
    })
  );
  return fontDownloads.then((contents) => contents.join(" "));
}

const $$Astro$1 = createAstro("https://localhost:4321");
const $$GoogleFontsOptimizer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoogleFontsOptimizer;
  const props = Astro2.props;
  const urls = Array.isArray(props.url) ? props.url : [props.url];
  const preconnect = props.preconnectUrl ?? "https://fonts.gstatic.com";
  const contents = await Promise.all(
    urls.map(async (url) => {
      try {
        const css = await downloadFontCSS(url);
        return { css };
      } catch (err) {
        return { url };
      }
    })
  );
  return renderTemplate`${contents.length > 0 && preconnect && renderTemplate`<link rel="preconnect"${addAttribute(preconnect, "href")} crossorigin="anonymous">`}${contents.map((content) => {
    if (content.css) {
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`<style>${unescapeHTML(content.css)}</style>` })}`;
    }
    return renderTemplate`<link${addAttribute(content.url, "href")} rel="stylesheet">`;
  })}`;
}, "C:/git/github.com/garpunkal/umbraco-headless-starter/src/content-delivery/node_modules/@garpunkal/astro-google-fonts-optimizer/GoogleFontsOptimizer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><title>', '</title><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="format-detection" content="telephone=no"><meta name="keywords" content=""><meta name="description" content=""><meta name="author" content="Gareth Wright"><meta name="copyright" content="Gareth Wright"><meta name="theme-color" content="#077DA0"><meta property="og:title" content=""><meta property="og:site_name" content=""><meta property="og:type" content="website"><meta property="og:url" content="https://localhost:4321"><meta property="og:image" content=""><meta property="og:description" content=""><meta name="twitter:card" content="summary"><meta name="twitter:site" content="https://localhost:4321"><meta name="twitter:title" content=""><meta name="twitter:description" content=""><meta name="twitter:creator" content=""><meta name="twitter:image:src" content=""><link rel="publisher" href="https://localhost:4321"><link rel="canonical" href="https://localhost:4321"><link rel="sitemap" href="/sitemap-index.xml">', "", '</head> <body> <a href="#main" class="skip-to-main-content-link">Skip to main content</a> <main id="main"> ', ' </main> <script>\n			if (localStorage.theme === "dark") document?.querySelector("html")?.classList.add("dark");\n\n			const element = document.getElementById("switch-theme");\n			if (element) {\n				element.addEventListener("click", () => {\n					const htmlClasses = document.querySelector("html")?.classList;\n					if (localStorage.theme === "dark") {\n						htmlClasses?.remove("dark");\n						localStorage.theme = "light";\n					} else {\n						htmlClasses?.add("dark");\n						localStorage.theme = "dark";\n					}\n				});\n			}\n		<\/script> <!-- <script>\n			import DynamicModules from "../scripts/DynamicModules.ts";\n			const moduleImporter = new DynamicModules();\n			moduleImporter.init();\n		<\/script> --> </body></html>'])), title, renderComponent($$result, "GoogleFontsOptimizer", $$GoogleFontsOptimizer, { "url": "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap" }), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/git/github.com/garpunkal/umbraco-headless-starter/src/content-delivery/src/layouts/Layout.astro", void 0);

const client = createClient(createConfig());

class ContentService {
  /**
   * @deprecated
   */
  static getContent(options) {
    return (options?.client ?? client).get({
      url: "/umbraco/delivery/api/v1/content",
      ...options
    });
  }
  static getContent20(options) {
    return (options?.client ?? client).get({
      url: "/umbraco/delivery/api/v2/content",
      ...options
    });
  }
  /**
   * @deprecated
   */
  static getContentItem(options) {
    return (options?.client ?? client).get({
      url: "/umbraco/delivery/api/v1/content/item",
      ...options
    });
  }
  /**
   * @deprecated
   */
  static getContentItemByPath(options) {
    return (options.client ?? client).get({
      url: "/umbraco/delivery/api/v1/content/item/{path}",
      ...options
    });
  }
  static getContentItemByPath20(options) {
    return (options.client ?? client).get({
      url: "/umbraco/delivery/api/v2/content/item/{path}",
      ...options
    });
  }
  /**
   * @deprecated
   */
  static getContentItemById(options) {
    return (options.client ?? client).get({
      url: "/umbraco/delivery/api/v1/content/item/{id}",
      ...options
    });
  }
  static getContentItemById20(options) {
    return (options.client ?? client).get({
      url: "/umbraco/delivery/api/v2/content/item/{id}",
      ...options
    });
  }
  static getContentItems20(options) {
    return (options?.client ?? client).get({
      url: "/umbraco/delivery/api/v2/content/items",
      ...options
    });
  }
}

function parseBoolean(value) {
  return false;
}

class UmbracoService {
  config;
  static instance;
  client;
  constructor() {
    this.config = {
      apiKey: "",
      preview: parseBoolean(),
      baseUrl: ""
    };
    const clientOptions = createConfig({
      baseUrl: this.config.baseUrl
    });
    this.client = createClient(clientOptions);
  }
  /**
   * Get the singleton instance
   */
  static getInstance() {
    if (!UmbracoService.instance) {
      UmbracoService.instance = new UmbracoService();
    }
    return UmbracoService.instance;
  }
  async getContentItemByPath(path) {
    return await ContentService.getContentItemByPath20({
      path: { path },
      client: this.client,
      headers: {
        apiKey: this.config.apiKey,
        preview: this.config.preview
      },
      query: {
        expand: "properties[content[properties[$all]],$all]"
      }
    }) || null;
  }
}
const umbracoService = UmbracoService.getInstance();

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await umbracoService.getContentItemByPath("/");
  console.log(homepage);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Umbraco Headless Starter" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container"> <h1>Umbraco Headless Starter</h1> <p>Welcome to the Umbraco Headless Starter!</p> <a id="switch-theme" aria-label="dark mode" title="dark mode" class="w-full cursor-pointer text-primary">[theme]</a> ${homepage && renderTemplate`<p>${homepage?.properties?.title}</p>`} </section> ` })}`;
}, "C:/git/github.com/garpunkal/umbraco-headless-starter/src/content-delivery/src/pages/index.astro", void 0);

const $$file = "C:/git/github.com/garpunkal/umbraco-headless-starter/src/content-delivery/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
