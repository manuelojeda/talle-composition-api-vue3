<template>
  <button @click="clickMe">
    Click me
  </button>
  {{ characters }}
</template>

<script>
import Characters from './class/Characters'

export default {
  name: 'App',
  setup () {
    const service = new Characters()
    const characters = service.getCharacters()

    async function clickMe () {
      await service.fetch()
    }

    return {
      characters,
      clickMe
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
