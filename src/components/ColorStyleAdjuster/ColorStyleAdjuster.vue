<script setup>
import { ref, onMounted, watch, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue'

const arr = [1, 2, 3, 4, 5]
</script>

<template>
  <div
    class="absolute top-20 ml-3 w-52 h-[580px] bg-white shadow-sm border-2 border-slate-100 rounded-lg"
  >
    <!-- block 1 -->
    <div class="my-2">
      <div class="">
        <div class="box-border pl-2 text-sm text-slate-500 text-left mb-1">Stroke</div>
        <div class="flex w-full h-7">
          <div class="flex justify-between px-2 items-center w-3/4">
            <div v-for="item in arr" :key="item" class="w-5 h-5 bg-amber-300 rounded-sm"></div>
          </div>
          <div class="w-1/4 border-slate-300 border-l-2 flex justify-center items-center ml-2">
            <div class="w-5 h-5 bg-amber-300 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- block 2 -->
    <div class="my-2">
      <div class="">
        <div class="box-border pl-2 text-sm text-slate-500 text-left mb-1">Background</div>
        <div class="flex w-full h-7">
          <div class="flex justify-between px-2 items-center w-3/4">
            <div v-for="item in arr" :key="item" class="w-5 h-5 bg-amber-300 rounded-sm"></div>
          </div>
          <div class="w-1/4 border-slate-300 border-l-2 flex justify-center items-center ml-2">
            <div class="w-5 h-5 bg-amber-300 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
