<script setup>
import { ref, onMounted, watch, onBeforeMount, onBeforeUpdate, onUpdated } from "vue";
import { useToolStore } from '../../stores/toolState.js'

const toolStore = useToolStore()
const activeButton = ref(1)

const setToolType = ( toolType ) => {
  toolStore.changeTool( toolType)
  if (toolType == "selection") {
    activeButton.value = 1
  }else if (toolType == "line") {
    activeButton.value = 2
  }else{
    activeButton.value = 3
  }
}

// :class="checkToolActive(toolStore.tool)"sssssssssssssssssss
const checkActive = ( type ) => {
  return toolType == 'selection' ? ' text-purple-200' : ''
}
</script>
<template>
  <div
    class="fixed top-0 left-0 right-0 w-full h-14 p-1 flex justify-between items-center bg-transparent"
  >
    <div
      class="h-10 w-10 text-center flex justify-center items-center border border-slate-200 rounded-lg"
    >
      <font-awesome-icon icon="bars" />
    </div>
    <div
      class="h-10 w-[500px] text-center flex justify-start items-center border border-slate-200 rounded-lg shadow-lg text-xl"
    >
      <button @click="setToolType('selection')" class="m-2" :class="activeButton === 1 ? ' text-violet-300' : ' '" >
        <font-awesome-icon :icon="['far', 'hand']" />
      </button>
      <button @click="setToolType('line')" class="mr-2" :class="activeButton === 2 ? ' text-violet-300' : ' '"  >
        <font-awesome-icon :icon="['fas', 'minus']" />
      </button>
      <button @click="setToolType('rectangle')" class="mr-2" :class="activeButton === 3 ? ' text-violet-300' : ' '"  > 
        <font-awesome-icon :icon="['far', 'square']" />
      </button>
    </div>
    <div
      class="h-10 w-10 text-center flex justify-center items-center border border-slate-200 rounded-lg text-purple-500"
    >
      <font-awesome-icon icon="user" />
    </div>
  </div>
  <!-- hello -->
</template>
