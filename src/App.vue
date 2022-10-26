<template>
  <div class="bg-[#1D2123] text-white min-h-screen flex font-quicksand font-normal relative max-w-full w-full">
    <router-view v-slot="{ Component, route }">
      <transition
        :enter-to-class="route.meta.enterClass"
        :leave-to-class="route.meta.leaveClass"
        name="cover"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>

  /* #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } */

  .cover-enter-from {
    opacity: 0;
  }

  .cover-enter-from::after {
    /* content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: red; */
  }

  .cover-enter-to {
    opacity: 1;
  }

  .cover-right-enter::after, .cover-up-enter::after, .cover-down-enter::after {
    content: "";
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #1D2123;
    z-index: 200;
  }
  
  .cover-right-enter::after {
    animation: slideRight cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.5s;
  } 

  .cover-down-enter::after {
    animation: slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.7s;
  }

  .cover-up-enter::after {
    animation: slideUp cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s 0.2s;
  }
  
  .cover-enter-active {
    transition: all 0.1s ease;
    animation-delay: 1s;
    animation-duration: 6s;
  }

  @keyframes slideRight {
    0% {
      width: 100%;
      left: 0;
    }

    100%  {
      width: 0;
      left: 100%;
    }
  }

  @keyframes slideDown {
    0% {
      height: 100%;
      top: 0;
    }

    100%  {
      height: 0;
      top: 100%;
    }
  }

  @keyframes slideUp {
    0% {
      height: 100%;
      bottom: 0;
    }

    100%  {
      height: 0;
      bottom: 100%;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background: #1A1E1F;
  }
  ::-webkit-scrollbar-thumb {
      cursor: pointer;
      background: rgba(250, 205, 102, 0.9);
  }
  ::selection {
      background-color: #FACD66;
      color: #1A1E1F
  }
  -webkit-::selection {
      background-color: #FACD66;
      color: #1A1E1F
  }
  ::-moz-selection {
      background-color: #FACD66;
      color: #1A1E1F
  }
</style>

<script setup>
	// import { onMounted, onUpdated } from "vue";
</script>