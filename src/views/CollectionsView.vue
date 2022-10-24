<template>
    <div class="bg-[#1D2123] text-white min-h-screen flex font-quicksand font-normal">
        <SideBar :active="'collections'" />
        
        <div class="ml-28 max-w-full pr-14 relative" id="main-content">
            <NavBar />
            <section class="mt-[90px] flex gap-8 relative mb-12 w-full flex-col">
                <div class="flex text-[15px] gap-5 font-semibold items-center">
                    <button class="px-6 py-2 rounded-[30px] flex bg-brand-yellow border-2 border-transparent hover:border-brand-yellow gap-3 items-center duration-300 ease-in text-[#1D2123] hover:text-brand-yellow hover:bg-transparent">
                        My Collections
                    </button>
                    <button class="text-white px-6 py-2 rounded-[30px] flex bg-transparent gap-3 items-center duration-300 ease-in border-2 border-[#efeee0] border-opacity-25 text-opacity-70 hover:text-[#1D2123] hover:font-bold hover:bg-white">
                        My Likes
                    </button>
                </div>
                <div>
                    <div class="w-52 h-52 rounded-[20px] relative">
                        <img class="w-full h-full rounded-[20px]" src="@/assets/images/album-cover-3.svg" />
                        <div class="absolute top-0 right-0 bottom-0 w-full h-full flex items-end px-5 rounded-[20px]" style="background: linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%);">
                            <div>
                                <a class="font-semibold text-xl tracking-wide mb-1 text-[#EFEEE0]">Limits</a>
                                <p class="font-semibold text-xs text-[#EFEEE0] text-opacity-75 mb-[22px]">John Watts</p>
                            </div>
                        </div>
                    </div>
                </div>
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
    import { onMounted } from "vue";
    import MusicPlayer from '@/components/MusicPlayer.vue';
    // import CategoryList from '@/components/CategoryList.vue';

    onMounted(() => {
        let main = document.getElementById("main-content")
        let sidebar = document.getElementById("sidebar")
        main.style.width = (document.body.offsetWidth - sidebar.offsetWidth-1) + "px"
        main.style.maxWidth = (document.body.offsetWidth - sidebar.offsetWidth-1) + "px"

        let playerHeight = document.getElementById("music-player").offsetHeight;
        main.style.marginBottom = playerHeight/2 + "px"
    })

// let show = ref(false)

// function showCategory() {
//   show = true
// }
</script>

<style scoped>
    /* .wave-div {
        background-position: right top;
        background-size: cover;
    } */
</style>