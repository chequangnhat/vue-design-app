<script setup>
import { ref, onMounted, watch, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue'

import { useCounterStore } from '../../stores/counter.js'

const counterStore = useCounterStore()

// counterStore.increment()
console.log(counterStore.count)
console.log('hello')

const clickAdd = () => {
  counterStore.increment()
}

watch(counterStore, () => {
  console.log('store change: ', counterStore.count)
  console.log('arr change: ', counterStore.countArr)
})
</script>

<template>
  <div>heeloo</div>
  <button @click="clickAdd">add 1</button>
</template>
