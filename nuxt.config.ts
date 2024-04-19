// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://secure-assets-sandbox.norbr.io/stylesheet/1.9/norbr-client.min.css",
        },
      ],

      script: [
        {
          src: "https://secure-assets-sandbox.norbr.io/javascript/1.9/norbr-client.min.js",
        },
      ],
    },
  },
});
