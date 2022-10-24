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
                    <div class="w-56 h-56 rounded-[20px] relative cursor-pointer group overflow-hidden">
                        <img class="w-full h-full object-cover rounded-[20px] group-hover:scale-150 duration-700 ease-out" src="@/assets/images/music-1.jpg" />
                        <div class="group absolute top-0 right-0 bottom-0 w-full h-full flex items-end px-5 rounded-[20px] duration-500 ease-in justify-between" style="background: linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%);">
                            <div class="translate-y-10 group-hover:translate-y-0 duration-500 ease-in-out">
                                <a class="font-semibold text-xl tracking-wide block mb-0.5 text-[#EFEEE0]">Limits</a>
                                <p class="font-semibold text-xs text-[#EFEEE0] text-opacity-75 mb-5">John Watts</p>
                                <p class="font-bold text-xs text-white text-opacity-80 mb-6 opacity-0 group-hover:opacity-100 hover:duration-500 duration-300 ease-in-out">2.3m likes</p>
                            </div>
                            <div class="bg-brand-yellow rounded-full w-10 h-10 bg-opacity-40 flex items-center justify-center mb-5 mr-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <svg class="fill-brand-yellow" width="19" height="19" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z"/></svg>
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