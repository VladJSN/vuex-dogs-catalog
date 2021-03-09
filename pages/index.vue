<template>
  <div class="container">
    <div>
      <Logo />
      <div class="spacer"></div>
      <dog-filter />
      <div class="spacer"></div>
      <dog-list />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DogFilter from '~/components/DogFilter.vue'
import DogList from '~/components/DogList.vue'

export default Vue.extend({
  components: { DogList, DogFilter },
})
</script>

<style>
.spacer {
  margin: 20px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
