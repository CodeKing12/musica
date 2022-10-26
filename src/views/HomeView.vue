<template>
  <div class="bg-[#1D2123] text-white min-h-screen flex font-quicksand font-normal cover-animate max-w-[100vw]">
    <SideBar />
    <div class="ml-28 pr-14 relative" id="main-content" ref="main">
      <NavBar />
      <section>
        <section class="mt-[101px] flex gap-6 relative">
          <div class="bg-[#609EAF] text-white w-4/6 rounded-[40px] flex justify-between relative overflow-hidden">
            <div class="py-10 px-10">
              <p class="mb-20 font-bold text-base">Curated Playlist</p>
              <h1 class="mb-[14px] font-bold text-5xl">
                R & B Hits
              </h1>
              <p class="mb-20 w-[330px] font-medium">
                All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more
              </p>
              <div class="flex gap-3 items-center">
                <div class="profile-pill flex w-fit">
                    <img class="w-8 h-8 rounded-full" src="@/assets/images/profile-6.jpg" />
                    <img class="w-8 h-8 rounded-full -ml-4" src="@/assets/images/profile-1.jpg" />
                    <img class="w-8 h-8 rounded-full -ml-4" src="@/assets/images/profile-2.jpg" />
                    <img class="w-8 h-8 rounded-full -ml-4" src="@/assets/images/profile-3.jpg" />
                    <img class="w-8 h-8 rounded-full -ml-4" src="@/assets/images/profile-4.jpg" />
                </div>
                <img class="w-5" src="@/assets/icons/heart.svg" />
                <p>33k Likes</p>
              </div>
            </div>
            <div class="pr-1 bg-right-top bg-no-repeat relative wave-div z-30">
              <!-- bg-[url(@/assets/icons/bg-wave.svg)] -->
              <img class="h-full object-cover" src="@/assets/images/artist.png" />
            </div>
            <img class="absolute right-0 top-0 h-full z-20" src="@/assets/icons/bg-wave.svg" />
          </div>
          <div class="w-2/6">
            <h2 class="font-bold text-2xl mb-[14px]">Top Charts</h2>
            <HorizontalSlider @show-category="showCategory()" />
          </div>
        </section>
        <section class="mt-12">
          <h2 class="font-bold text-2xl mb-4">New Releases</h2>
          <MusicSlider />
        </section>
        <section class="mt-[60px] pb-10">
          <h2 class="font-bold text-2xl mb-4">Popular in your Area</h2>
          <MusicSlider />
        </section>
        <!-- <CategoryList :show="show" /> -->
      </section>
    </div>
		<MusicPlayer />
  </div>
</template>

<script setup>
  // @ is an alias to /src
  // import { ref } from "vue";
  import NavBar from '@/components/NavBar.vue';
  import SideBar from '@/components/SideBar.vue';
  import HorizontalSlider from "@/components/HorizontalSlider.vue"
	import MusicSlider from "@/components/MusicSlider.vue"
	import { onMounted, ref } from "vue";
  import MusicPlayer from '@/components/MusicPlayer.vue';
  import { setWidth } from "@/main.js"

  let main = ref(null)

	onMounted(() => {
    setWidth(main)
	})

  // Add arrows to your music sliders.
</script>

<style scoped>
	/* .wave-div {
		background-position: right top;
		background-size: cover;
	} */
</style>