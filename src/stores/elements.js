import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useElementStore = defineStore('elements', () => {
  const elements = reactive({ elements: [] })
  const stylingElementSelected = ref(null)

  function addNewElement(element) {
    return elements.elements.push(element)
  }

  function setNewValueElement(newElements) {
    elements.elements = newElements
  }

  function setStylingElement(value) {
    console.log('setStylingElement call')
    stylingElementSelected.value = value

    console.log('setStylingElement', stylingElementSelected.value)
  }

  function updateAttribute(attributeName, attributeValue) {
    const index =
      stylingElementSelected.value == null
        ? -1
        : elements.elements.findIndex((item) => {
            return Object.keys(item).every((key) => item[key] === stylingElementSelected.value[key])
          })

    console.log('updateAttribute', attributeName, attributeValue)
    console.log('index found', index)
    if (index >= 0) {
      // console.log('element at index', elements.elements[index])
      const newEl = elements.elements[index]
      newEl['roughElement']['options'][attributeName] = attributeValue

      const elementsCopy = [...elements.elements]
      elementsCopy[index] = newEl

      setNewValueElement(elementsCopy)

      console.log('element at index', elements.elements[index])
    }
  }

  return {
    elements,
    stylingElementSelected,
    addNewElement,
    setNewValueElement,
    setStylingElement,
    updateAttribute
  }
})
