<script setup>
import { useElementStore } from '../../stores/elements.js'

import imgHachure from '../../assets/icon/hachure.jpg'
import imgGrid from '../../assets/icon/grid.jpg'
import imgRoughness0 from '../../assets/icon/roughness_0.jpg'
import imgRoughness1 from '../../assets/icon/roughness_1.jpg'
import imgRoughness2 from '../../assets/icon/roughness_2.jpg'

const elementstore = useElementStore()

const adjust = (attributeName, attributeValue) => {
  elementstore.updateAttribute(attributeName, attributeValue)
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
            <div class="w-5 h-5 bg-blue-500 rounded-sm" @click="adjust('stroke', 'blue')"></div>
            <div class="w-5 h-5 bg-yellow-500 rounded-sm" @click="adjust('stroke', 'yellow')"></div>
            <div class="w-5 h-5 bg-red-500 rounded-sm" @click="adjust('stroke', 'red')"></div>
            <div class="w-5 h-5 bg-green-500 rounded-sm" @click="adjust('stroke', 'green')"></div>
            <div class="w-5 h-5 bg-purple-500 rounded-sm" @click="adjust('stroke', 'purple')"></div>
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
            <div class="w-5 h-5 bg-blue-500 rounded-sm" @click="adjust('fill', 'blue')"></div>
            <div class="w-5 h-5 bg-yellow-500 rounded-sm" @click="adjust('fill', 'yellow')"></div>
            <div class="w-5 h-5 bg-red-500 rounded-sm" @click="adjust('fill', 'red')"></div>
            <div class="w-5 h-5 bg-green-500 rounded-sm" @click="adjust('fill', 'green')"></div>
            <div class="w-5 h-5 bg-purple-500 rounded-sm" @click="adjust('fill', 'purple')"></div>
          </div>
          <div class="w-1/4 border-slate-300 border-l-2 flex justify-center items-center ml-2">
            <div class="w-5 h-5 bg-amber-300 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- block 3 -->
    <div class="my-2">
      <div class="">
        <div class="box-border pl-2 text-sm text-slate-500 text-left mb-1">Fill</div>
        <div class="flex w-full h-7">
          <div class="flex justify-start px-2 items-center w-3/4">
            <div class="w-5 h-5 bg-blue-500 rounded-sm mr-2" @click="adjust('fillStyle', 'hachure')">
              <img class="w-5 h-5" :src="imgHachure" alt="" />
            </div>
            <div class="w-5 h-5 bg-yellow-500 rounded-sm" @click="adjust('fillStyle', 'solid')">
              <img class="w-5 h-5" :src="imgGrid" alt="" />
            </div>
          </div>
          <div class="w-1/4 border-slate-300 border-l-2 flex justify-center items-center ml-2">
            <div class="w-5 h-5 bg-amber-300 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- block 4 -->
    <div class="my-2">
      <div class="">
        <div class="box-border pl-2 text-sm text-slate-500 text-left mb-1">Roughness</div>
        <div class="flex w-full h-7">
          <div class="flex justify-start px-2 items-center w-3/4">
            <div class="w-5 h-5 bg-blue-500 rounded-sm mr-2" @click="adjust('roughness', 0)">
              <img class="w-5 h-5" :src="imgRoughness0" alt="" />
            </div>
            <div class="w-5 h-5 bg-yellow-500 rounded-sm mr-2" @click="adjust('roughness', 3 )">
              <img class="w-5 h-5" :src="imgRoughness1" alt="" />
            </div>
            <div class="w-5 h-5 bg-yellow-500 rounded-sm mr-2" @click="adjust('roughness', 7 )">
              <img class="w-5 h-5" :src="imgRoughness2" alt="" />
            </div>
            <div class="w-5 h-5 bg-yellow-500 rounded-sm" @click="adjust('roughness', 10 )">
              <img class="w-5 h-5" :src="imgRoughness2" alt="" />
            </div>
          </div>
          <div class="w-1/4 border-slate-300 border-l-2 flex justify-center items-center ml-2">
            <div class="w-5 h-5 bg-amber-300 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
