<template>
    <nav class="navigation grid-content">
        <div class="navigation__inner">
            <div class="navigation__logo">
                <img :src="navigation.logo.filename" />
            </div>
            <ul class="navigation__list" v-if="navigation.navigationList.length > 0">
                <li class="navigation__item" v-for="nav in navigation.navigationList">
                    <Nuxt-link :to="nav.link.story.url">
                        {{ nav.text }}
                    </Nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/navigation", {
        version: "draft",
        resolve_links: "url",
    });
    const navigation = ref(null);

    navigation.value = data.story.content;
</script>
