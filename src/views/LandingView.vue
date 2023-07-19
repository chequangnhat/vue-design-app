<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>
<template>
  <div class="h-screen flex justify-center items-center flex-col">
    <div class="text-7xl text-center font-semibold text-transparent bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text">
      Create Design <br/> Make it beautiful
    </div>
    <button
      class="w-80 h-16 bg-violet-300 rounded-3xl text-white font-medium text-3xl mb-5 mt-7 hover:bg-violet-500"
      @click="router.push('/login')"
    >
      Create new design
    </button>

  </div>
</template>
