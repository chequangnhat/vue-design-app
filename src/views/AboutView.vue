<script setup>
import { useElementStore } from '../stores/elements.js'

const elementstore = useElementStore()

const { elements } = elementstore.elements
elementstore.addNewElement(2)
console.log(elements)
</script>

<template>
  hehe
</template>

<style>

</style>
