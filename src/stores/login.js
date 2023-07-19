import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const userLoggedIn = ref(null)

  function changeUserLoggedIn(newValue) {
    console.log('change login call')
    console.log(newValue)
    userLoggedIn.value = newValue
  }

  return {
    userLoggedIn,
    changeUserLoggedIn
  }
})
