import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useElementStore = defineStore('elements', () => {
  const elements = reactive({ elements: [] })
  const stylingElementSelected = ref(null)

  function addNewElement(element) {
    return elements.elements.push(element)
  }

  function setNewValueElement(newElements) {
    return elements.elements = newElements
  }
  function setNewValueElementAtIndex( index ,newElement ) {
    const elementsCopy = [...elements.elements]
    elementsCopy[index] = newElement
    return setNewValueElement(elementsCopy)
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

    // console.log('updateAttribute', attributeName, attributeValue)
    console.log('index found', index)
    if (index >= 0) {
      // console.log('element at index', elements.elements[index])
      const newElement = elements.elements[index]
      newElement['roughElement']['options'][attributeName] = attributeValue

      // delete elements.elements[index]['roughElement']['options']['hachureAngle']
      // delete elements.elements[index]['roughElement']['options']['hachureGap']

      // newElement['roughElement']['options']['hachureGap'] = 0

      console.log('element at index update', elements.elements[index])
      return setNewValueElementAtIndex( index, newElement)
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
