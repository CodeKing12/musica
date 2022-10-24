<template>
    <div class="w-full px-3 py-2 bg-[rgb(51,55,59)] bg-opacity-[0.37] rounded-2xl flex gap-20 items-center group hover:bg-opacity-[0.65] cursor-pointer duration-300 ease-in-out hover:-translate-y-[3px]">
        <div class="flex gap-6 items-center w-[10%]">
            <div class="relative w-12 h-12 rounded-lg">
                <img class="w-full h-full rounded-lg" src="@/assets/images/album-cover-5.svg" />
                <span class="opacity-0 duration-[250ms] ease-linear group-hover:opacity-100 absolute top-0 rounded-lg w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <svg class="fill-[#d2d2c2]" width="22" height="22" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z"/></svg>
                </span>
            </div>
            <svg class="heart fill-transparent hover:fill-[#E5524A] cursor-pointer transition-all duration-200 ease-linear" width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.43496 10.3718C1.54079 7.58016 2.58662 4.10933 5.51746 3.16599C7.05912 2.66849 8.96162 3.08349 10.0425 4.57433C11.0616 3.02849 13.0191 2.67183 14.5591 3.16599C17.4891 4.10933 18.5408 7.58016 17.6475 10.3718C16.2558 14.7968 11.4 17.1018 10.0425 17.1018C8.68579 17.1018 3.87329 14.8485 2.43496 10.3718Z" stroke="#EFEEE0" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.1572 6.30328C14.163 6.40662 14.7922 7.20412 14.7547 8.32162" stroke="#EFEEE0" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <p class="text-white w-[30%] font-semibold text-ellipsis cursor-pointer">Let me love you ~ <span class="text-[#bdbdb7]">Krisx</span></p>
        <div class="flex justify-between w-[55%] items-center">
            <p class="font-semibold text-[#ddd] text-center w-[45%] mr-7">Single</p>
            <p class="font-semibold text-[#d5d5d5] w-1/5 mr-6">4:17</p>
            <p class="font-semibold text-[#d5d5d5] w-[45%] mr-6">September 19th, 2022</p>
            <div class="w-[10%]">
                <vs-dropdown>
                    <vs-button type="success-gradient">
                        <svg class="cursor-pointer" width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25782 8.94595C8.63788 8.94595 8.94598 8.63785 8.94598 8.25779C8.94598 7.87774 8.63788 7.56964 8.25782 7.56964C7.87777 7.56964 7.56967 7.87774 7.56967 8.25779C7.56967 8.63785 7.87777 8.94595 8.25782 8.94595Z" stroke="#FACD66" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.25782 4.12887C8.63788 4.12887 8.94598 3.82077 8.94598 3.44072C8.94598 3.06066 8.63788 2.75256 8.25782 2.75256C7.87777 2.75256 7.56967 3.06066 7.56967 3.44072C7.56967 3.82077 7.87777 4.12887 8.25782 4.12887Z" stroke="#FACD66" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.25782 13.763C8.63788 13.763 8.94598 13.4549 8.94598 13.0749C8.94598 12.6948 8.63788 12.3867 8.25782 12.3867C7.87777 12.3867 7.56967 12.6948 7.56967 13.0749C7.56967 13.4549 7.87777 13.763 8.25782 13.763Z" stroke="#FACD66" stroke-width="1.3763" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </vs-button>
                    <!-- <a href="#">Hola mundo</a> -->
                    <vs-dropdown-menu :class="'horiz-dropdown-menu'">
                        <vs-dropdown-item :class="'dropdown-item'">
                            Share
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                            Remove
                        </vs-dropdown-item>
                        <span class="my-1 block h-[0.5px] bg-white bg-opacity-40"></span>
                        <vs-dropdown-item>
                            Add to Playlist
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                            Go To Artist
                        </vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .heart:hover, .heart:hover * {
        stroke: #E5524A !important;
        transition: all 0.2s ease;
    }

    .vs-dropdown-menu {
    }

    li.vs-dropdown--item {
        background-color: #242627;
        color: white;
        font-family: 'Quicksand', sans-serif;
        font-size: 15px;
    }

    .vs-dropdown--item.divider {
        border-top-color: rgba(80, 80, 80);
        border-top-width: 1.4px;
        padding-top: 4px;
    }

</style>

<style>
    .vs-dropdown--menu--after {
        background-color: #FACD66 !important;
    }

    .vs-dropdown-menu.notHeight .vs-dropdown--menu--after {
        top: unset !important;
    }

    .vs-dropdown--menu {
        background-color: #242627 !important;
        z-index: 30
    }

    li.vs-dropdown--item:hover a {
        color: #FACD66 !important;
        transition: all 0.3s ease-out;
    }

    li.vs-dropdown--item a {
        font-weight: 600;
    }

    .vs-dropdown--menu {
        z-index: 30;
    }

    .con-vs-dropdown--menu {
        width: max-content !important;
    }
</style>

<script setup>
    
</script>