<template>
  <div class="bg-[#1D2123] min-h-screen">
    <NavBar />
    <div>
      <SideBar />
    </div>
  </div>
</template>

<script setup>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import SideBar from '@/components/SideBar.vue'
</script>
