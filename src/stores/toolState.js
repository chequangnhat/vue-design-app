import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToolStore = defineStore('tool', () => {
  const tool = ref("selection");
  
  function changeTool(toolType) {
    tool.value = toolType
  }

  return { tool, changeTool }
})
