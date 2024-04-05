// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        apiOptions: { region: "us" },
      },
    ],
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
  ],
  app: {
    head: {
      charset: "utf-16",
      viewport: "initial-scale=1",
      title: "Starter",
      meta: [{ name: "description", content: "This is a starter pack" }],
    },
  },
  css: ["@/assets/styles/styles.scss"],
  i18n: {
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "fr",
        file: "fr.json",
      },
    ],
    defaultLocale: "en", // default locale
    lazy: true,
    langDir: "locales/",
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
    display: "swap",
    useStylesheet: true,
    download: false,
    preload: true,
  },
});
