<script setup>
import { ref, onMounted, watch, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

import { useToolStore } from '../../stores/toolState.js'
import { useLoginStore } from '../../stores/login.js'
import { useElementStore } from '../../stores/elements.js'
import axios from 'axios'

const toolStore = useToolStore()
const loginStore = useLoginStore()
const elementstore = useElementStore()
const router = useRouter()

const activeButton = ref(1)

const props = defineProps(['toImageClick'])

const saveDesign = async () => {
  const elementJson = JSON.stringify(elementstore.elements.elements)
  const csrf_token = localStorage.getItem('csrf_token')
  const response = await axios.post('http://127.0.0.1:8000/design_app/api/save_design/', {
    username: loginStore.userLoggedIn,
    design: elementJson
  },{
  headers: {
    'X-CSRFToken': csrf_token,
    user: loginStore.userLoggedIn
  }
})
  // const testObj = JSON.parse(testJson)
  console.log("saveDesign", response)
}

function callToImageClick() {
  // Call the function passed as a prop
  props.toImageClick()
}

const setToolType = (toolType) => {
  toolStore.changeTool(toolType)
  if (toolType == 'selection') {
    activeButton.value = 1
  } else if (toolType == 'line') {
    activeButton.value = 2
  } else {
    activeButton.value = 3
  }
}

const submitLogout = async () => {
  const response = await axios.post('http://127.0.0.1:8000/design_app/api/logout/')
  console.log('response', response.data.message)

  if (response.data.message == 'logout successful') {
    loginStore.changeUserLoggedIn(null)
    console.log('login store', loginStore.userLoggedIn)
  }

  if (loginStore.userLoggedIn == null) {
    router.push('/')
  }
}
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 w-full h-14 p-1 mx-2 flex justify-between items-center bg-transparent"
  >
    <div
      class="h-10 w-10 text-center flex justify-center items-center border border-slate-200 rounded-lg"
    >
      <font-awesome-icon icon="bars" />
    </div>
    <div
      class="h-10 w-[500px] text-center flex justify-start items-center border border-slate-200 rounded-lg shadow-lg text-xl"
    >
      <button
        @click="setToolType('selection')"
        class="m-2"
        :class="activeButton === 1 ? ' text-violet-300' : ' '"
      >
        <font-awesome-icon :icon="['far', 'hand']" />
      </button>
      <button
        @click="setToolType('line')"
        class="mr-2"
        :class="activeButton === 2 ? ' text-violet-300' : ' '"
      >
        <font-awesome-icon :icon="['fas', 'minus']" />
      </button>
      <button
        @click="setToolType('rectangle')"
        class="mr-2"
        :class="activeButton === 3 ? ' text-violet-300' : ' '"
      >
        <font-awesome-icon :icon="['far', 'square']" />
      </button>
      <button @click="saveDesign()" class="ml-auto mr-2">
        <font-awesome-icon :icon="['far', 'floppy-disk']" />
      </button>
      <button @click="callToImageClick()" class="ml-auto mr-2">
        <font-awesome-icon :icon="['fas', 'download']" />
      </button>
    </div>
    <div
      class="h-10 w-10 text-center flex justify-center items-center border border-slate-200 rounded-lg text-purple-500 mr-4"
      @click="submitLogout"
    >
      <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
    </div>
  </div>
  <!-- hello -->
</template>
