<template>
  <ul>
    <li v-for="item in dogs" :key="item">
      <img :src="item" loading="lazy" />
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    dogs() {
      return this.$store.state.filteredImages
    },
  },
  mounted() {
    this.$store.dispatch('fetchDogImages')
  },
}
</script>
<style lang="css" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  height: 40vh;
  flex-grow: 1;
}

li:last-child {
  flex-grow: 10;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
