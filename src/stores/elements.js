import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useElementStore = defineStore('elements', () => {
  const elements = reactive({ elements: [] })
  
  function addNewElement(element){
    return elements.elements.push(element)
  }
  function setNewValueElement( newElements ){
    elements.elements = newElements
  }

  return { elements, addNewElement, setNewValueElement }
})
