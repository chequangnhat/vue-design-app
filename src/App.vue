<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/Header/TheHeader.vue'
import CreateDesign from './components/CreateDesign/CreateDesign.vue'
import CountNumber from './components/CountNumber/CountNumber.vue'
import domtoimage from 'dom-to-image-more'
import { saveAs } from 'file-saver'

const toImageClick = () => {
  domtoimage.toBlob(document.getElementById('element-to-convert')).then(function (blob) {
    saveAs(blob, 'element-to-convert.png')
  })
}
</script>

<template>
  <TheHeader :toImageClick="toImageClick" />
  <CreateDesign />
</template>

<style>
canvas {
  background-color: white;
}
</style>
