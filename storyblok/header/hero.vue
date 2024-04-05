<template>
    <div v-editable="blok" class="hero fullwidth">
        <img :src="blok.image.filename" :alt="blok.image.alt" />
    </div>
</template>

<script setup>
    const props = defineProps({ blok: Object });
</script>
  