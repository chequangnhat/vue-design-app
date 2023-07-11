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

  function setStylingElement( value) {
    console.log('setStylingElement call')
    stylingElementSelected.value = value

    console.log('setStylingElement',stylingElementSelected.value)
  }
  //.prototype.hasOwnProperty.call(foo, "bar");

  // function updateAttribute( attributeName, attributeValue) {
  //   if (Object.prototype.hasOwnProperty.call(stylingElement.value, "fill")) {
  //     // Attribute already exists, update its value
  //     stylingElement.value[attributeName] = attributeValue;
  //   } else {
  //     // Attribute doesn't exist, add it to the object
  //     stylingElement.value[attributeName] = attributeValue;
  //   }
  // }

  function updateAttribute( element, attributeName, attributeValue ) {
    console.log("updateAttribute",attributeName, attributeValue)
    // console.log(elements.elements[0])
    // console.log(elements.elements)
    // elements.elements[0]["roughElement"]["options"][attributeName] = attributeValue
  }

  return { elements, stylingElementSelected, addNewElement, setNewValueElement, setStylingElement, updateAttribute }
})
