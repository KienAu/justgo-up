<template>
  <StoryblokComponent class="grid-content" v-if="story" :blok="story.content" :slug="slug" />
</template>

<script setup>
let { slug } = useRoute().params;

const { locale } = useI18n();
const resolveRelations = ["FeaturedArticles.articles"];

const url = slug && slug.length > 0 ? slug.join("/") : "home";

const story = await useAsyncStoryblok(
  url.replace(/\/$/, ""),
  {
    version: "draft",
    language: locale.value,
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
);
</script>
