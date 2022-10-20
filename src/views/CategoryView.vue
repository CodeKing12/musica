<template>
    <div class="bg-[#1D2123] text-white min-h-screen flex font-quicksand font-normal category-page">
      <SideBar />
      <div class="ml-32 max-w-full pr-14 relative" id="main-content">
        <NavBar />
        <section>
          <section class="mt-[90px] flex gap-6 relative">
            <img class="w-[290px] h-[290px] rounded-2xl" />
          </section>
        </section>
      </div>
          <MusicPlayer />
    </div>
  </template>
  
<script setup>
    import { onMounted } from "vue";
    import NavBar from '@/components/NavBar.vue';
    import SideBar from '@/components/SideBar.vue';
    import MusicPlayer from '@/components/MusicPlayer.vue';
    // import CategoryList from '@/components/CategoryList.vue';

    onMounted(() => {
        let main = document.getElementById("main-content")
        let sidebar = document.getElementById("sidebar")
        main.style.width = (document.body.offsetWidth - sidebar.offsetWidth-1) + "px"
        main.style.maxWidth = (document.body.offsetWidth - sidebar.offsetWidth-1) + "px"
    })
</script>

<style scoped>
    .category-page {
      background: linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(@/assets/images/music-1.svg) no-repeat cover;
    }
</style>