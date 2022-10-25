<template>
  <div class="bg-[#1D2123] text-white min-h-screen flex font-quicksand font-normal relative">
    <router-view v-slot="{ Component }">
      <transition name="cover">
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

  .cover-enter-to::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #1D2123;
    z-index: 200;
    animation: slideOff cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s;
  }
  
  .cover-enter-active {
    transition: all 1s ease;
    animation-duration: 14s;
  }

  @keyframes slideOff {
    0% {
      width: 100%;
      left: 0;
    }

    100%  {
      width: 0;
      left: 100%;
    }
  }
</style>
