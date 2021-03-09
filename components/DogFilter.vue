<template>
  <div>
    Select Filter
    <select v-model="selected">
      <option disabled value="">Select Breed</option>
      <option v-for="item in breeds" :key="item">{{ item }}</option>
    </select>
    <button @click="reset()">reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    breeds() {
      return this.$store.state.breeds
    },
  },
  watch: {
    '$store.state.filter'(newFilter) {
      if (newFilter === false) this.selected = ''
    },
    selected(newSelected) {
      this.$store.dispatch('filterImagesByBreed', newSelected)
    },
  },
  methods: {
    reset() {
      this.$store.dispatch('filterReset')
    },
  },
}
</script>
