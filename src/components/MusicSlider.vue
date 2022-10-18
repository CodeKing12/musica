<template>
    <div class="mb-10">
        <swiper
        :modules="[Virtual, Mousewheel, Keyboard]"
        :slides-per-view="7"
        :slides-per-group="3"
        :space-between="10"
        virtual
        :mousewheel="false"
        keyboard
        grab-cursor
        >
            <swiper-slide v-for="num in 20" :key="num"> <MusicCard /> </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
    import { Virtual, Mousewheel, Keyboard } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";
    import MusicCard from "@/components/MusicCard.vue"
</script>

<style>
    .swiper-slide {
        margin-right: 26px !important;
    }
</style>