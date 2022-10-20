<template>
    <div class="flex flex-col gap-4">
        <HorizontalMusicCard @show-category="emits('show-category')" />
        <HorizontalMusicCard @show-category="emits('show-category')" />
        <HorizontalMusicCard @show-category="emits('show-category')" />
    </div>
</template>

<script setup>
    import { defineEmits } from "vue";
    import HorizontalMusicCard from "@/components/HorizontalMusicCard.vue"

    const emits = defineEmits(["show-category"]);
</script>