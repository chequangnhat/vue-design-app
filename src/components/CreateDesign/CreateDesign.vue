<template>
  <ColorStyleAdjuster v-if="elementstore.stylingElementSelected != null" />
  <div>
    <canvas
      id="element-to-convert"
      ref="canvas"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
    >
      Canvas
    </canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

import ColorStyleAdjuster from '../ColorStyleAdjuster/ColorStyleAdjuster.vue'

import rough from 'roughjs'

const generator = rough.generator()

import { useToolStore } from '../../stores/toolState.js'
import { useElementStore } from '../../stores/elements.js'

const toolStore = useToolStore()
const elementstore = useElementStore()

const canvas = ref(null)
let rc = null // RoughCanvas instance

const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)

const action = ref('none')
const selectedElement = ref(null)

const createElement = (
  id,
  x1,
  y1,
  x2,
  y2,
  type,
  options = { fill: 'white', fillStyle: 'hachure', roughness: 0 }
) => {
  var roughElement = null
    if (type == 'line'){
      roughElement = generator.line(x1, y1, x2, y2, options)
    } else if ( type == 'rectangle' ) {
      roughElement = generator.rectangle(x1, y1, x2 - x1, y2 - y1, options)
    } else if ( type == 'circle' ) {
      roughElement = generator.circle(x1, y1, distance({ x: x1, y: y1 }, { x: x2 - x1, y: y2 - y1 }) , options)
    }
  return { id, x1, y1, x2, y2, type, roughElement }
}

const isWithinElement = (x, y, element) => {
  const { x1, x2, y1, y2, type } = element
  if (type == 'rectangle') {
    const minX = Math.min(x1, x2)
    const maxX = Math.max(x1, x2)
    const minY = Math.min(y1, y2)
    const maxY = Math.max(y1, y2)

    return x >= minX && x <= maxX && y >= minY && y <= maxY
  } else {
    const a = { x: x1, y: y1 }
    const b = { x: x2, y: y2 }
    const c = { x, y }
    const offset = distance(a, b) - (distance(a, c) + distance(b, c))
    return Math.abs(offset) < 1
  }
}

const distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))

const getElementAtPosition = (x, y, elements) => {
  return elements.find((element) => isWithinElement(x, y, element))
}

const exactMousePosition = (event) => {
  const bounding = canvas.value.getBoundingClientRect()
  // Calculate the mouse position relative to the canvas
  const clientx = event.clientX - bounding.left
  const clienty = event.clientY - bounding.top

  return { clientx: clientx, clienty: clienty }
}

const handleMouseDown = (event) => {
  const { clientx: clientX, clienty: clientY } = exactMousePosition(event)

  if (toolStore.tool == 'selection') {
    //moving
    const element = getElementAtPosition(clientX, clientY, elementstore.elements.elements)
    elementstore.setStylingElement(element) //styling

    // console.log('element on mouse down, x, y', element.roughElement.shape, clientX, clientY)
    if (element) {
      const offsetX = clientX - element.x1
      const offsetY = clientY - element.y1
      selectedElement.value = { ...element, offsetX, offsetY }
      action.value = 'moving'
    } else {
      elementstore.setStylingElement(null)
    }
  } else {
    const id = elementstore.elements.length
    const element = createElement(id, clientX, clientY, clientX, clientY, toolStore.tool)
    elementstore.addNewElement(element)

    action.value = 'drawing'
  }
}

const handleMouseMove = (event) => {
  const { clientx: clientX, clienty: clientY } = exactMousePosition(event)

  if (toolStore.tool == 'selection') {
    event.target.style.cursor = getElementAtPosition(
      clientX,
      clientY,
      elementstore.elements.elements
    )
      ? 'move'
      : 'default'
  }

  if (action.value == 'drawing') {
    const index = elementstore.elements.elements.length - 1

    const { x1, y1, roughElement } = elementstore.elements.elements[index]
    const options = roughElement.options

    updateElement(index, x1, y1, clientX, clientY, toolStore.tool, options)
  } else if (action.value == 'moving') {
    const { id, x1, x2, y1, y2, type, offsetX, offsetY, roughElement } = selectedElement.value

    const width = x2 - x1
    const height = y2 - y1
    const newX1 = clientX - offsetX
    const newY1 = clientY - offsetY
    const options = roughElement.options

    updateElement(id, newX1, newY1, newX1 + width, newY1 + height, type, options)
  }
}

const handleMouseUp = () => {
  action.value = false

  if (elementstore.stylingElementSelected != null) {
    return
  }

  selectedElement.value = null
}

const updateElement = (id, x1, y1, x2, y2, type, options) => {
  const updatedElement = createElement(id, x1, y1, x2, y2, type, options)
  const elementsCopy = [...elementstore.elements.elements]
  elementsCopy[id] = updatedElement

  elementstore.setNewValueElement(elementsCopy)
}

function handleResize() {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  rc = rough.canvas(canvas.value)

  // Set canvas size to fullscreen
  canvas.value.width = windowWidth.value
  canvas.value.height = windowHeight.value
})

function redraw(listElements) {
  //clear canvas
  const ctx = canvas.value.getContext('2d')
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  //redraw all elements
  console.log('redraw all elements', elementstore.elements.elements)

  listElements.forEach((element) => {
    console.log('drawing element', element)
    const { x1, y1, x2, y2, roughElement } = element

    if (roughElement.shape == 'rectangle') {
      const newRoughElement = generator.rectangle(x1, y1, x2 - x1, y2 - y1, roughElement['options'])
      rc.draw(newRoughElement)
    } else if (roughElement.shape == 'line') {
      const newRoughElement = generator.line(x1, y1, x2, y2, roughElement['options'])
      rc.draw(newRoughElement)
    } else if (roughElement.shape == 'circle') {
      const newRoughElement = generator.circle(x1, y1, x2, y2, roughElement['options'])
      rc.draw(newRoughElement)
    }
  })
}

watch(windowWidth, () => {
  canvas.value.width = windowWidth.value
  canvas.value.height = windowHeight.value
  redraw(elementstore.elements.elements)
})

watch(elementstore, () => {
  console.log('watch elementstore', elementstore.elements)
  redraw(elementstore.elements.elements)
})
</script>

<style></style>
