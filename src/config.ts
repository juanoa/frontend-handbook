// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Frontend Engineer Handbook 2025";
export const SITE_DESCRIPTION =
  "El handbook para Product Frontend Enginneers que quieran dar el salto este 2025";
export const TWITTER_HANDLE = "@juania_";
export const MY_NAME = "Juan Otálora";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
