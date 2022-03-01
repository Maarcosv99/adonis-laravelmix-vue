<template>
  <div>
    <h1>Olhe o Notion</h1>
    <a href="https://lime-seeker-29c.notion.site/VueJs-Laravel-Mix-e914138f5ad94a338957a43e02bab5ea">Clique aqui</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    console.log('App has been mounted!!!')
  }
})
</script>

<style lang="scss">
a {
  border: 1px solid black;
  width: 100px;
  background: gray;
  padding: 5px 10px;
  text-align: center;

  &.active {
    background: tomato;
  }
}
</style>