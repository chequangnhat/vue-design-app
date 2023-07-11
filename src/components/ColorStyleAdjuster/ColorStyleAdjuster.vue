<script setup>
import { ref, onMounted, watch, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue'
import { useElementStore } from '../../stores/elements.js'

const elementstore = useElementStore()

const arr = [1, 2, 3, 4, 5]
const backgroundOption = ["blue", "yellow", "red", "green", "purple"]

const adjust = ( attributeName, attributeValue  ) => {
  elementstore.updateAttribute(attributeName, attributeValue )
}


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
            <!-- <div v-for="(color, index) in backgroundOption" :class="' w-5 h-5 bg-'+color+'-500'+' rounded-sm text-'+color+'-500 '" :key="index"  @click="adjust( 'fill' , color )">{{ index }}</div> -->
            <div class="w-5 h-5 bg-blue-500 rounded-sm" @click="adjust( 'fill' , 'blue' )"></div>
            <div class="w-5 h-5 bg-yellow-500 rounded-sm" @click="adjust( 'fill' , 'yellow' )"></div>
            <div class="w-5 h-5 bg-red-500 rounded-sm" @click="adjust( 'fill' , 'red' )"></div>
            <div class="w-5 h-5 bg-green-500 rounded-sm" @click="adjust( 'fill' , 'green' )"></div>
            <div class="w-5 h-5 bg-purple-500 rounded-sm" @click="adjust( 'fill' , 'purple' )"></div>
          </div>
          <div class="w-1/4 border-slate-300 border-l-2 flex justify-center items-center ml-2">
            <div class="w-5 h-5 bg-slate-500 rounded-sm"></div>
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
            <div class="w-5 h-5 bg-blue-500 rounded-sm" @click="adjust( 'fill' , 'blue' )"></div>
            <div class="w-5 h-5 bg-yellow-500 rounded-sm" @click="adjust( 'fill' , 'yellow' )"></div>
            <div class="w-5 h-5 bg-red-500 rounded-sm" @click="adjust( 'fill' , 'red' )"></div>
            <div class="w-5 h-5 bg-green-500 rounded-sm" @click="adjust( 'fill' , 'green' )"></div>
            <div class="w-5 h-5 bg-purple-500 rounded-sm" @click="adjust( 'fill' , 'purple' )"></div>
          </div>
          <div class="w-1/4 border-slate-300 border-l-2 flex justify-center items-center ml-2">
            <div class="w-5 h-5 bg-amber-300 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
