import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const countArr = reactive({ arr: [] })
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    // count.value++
    const num = count.value
    // console.log('increment', count.value, 'number', num)
    countArr.arr.push(num)
  }

  return { count, countArr, doubleCount, increment }
})
