export const state = () => ({
  breeds: [],
  images: [],
  filteredImages: [],
  filter: false,
})

export const mutations = {
  setBreeds(state, payload) {
    state.breeds = payload
  },
  setImages(state, payload) {
    state.images = payload
  },
  setFilter(state, payload) {
    state.filter = payload
  },
  setFilteredImages(state, payload) {
    state.filteredImages = payload
  },
}

export const actions = {
  async fetchDogImages({ commit }) {
    const resp = await this.$axios.$get(
      'https://dog.ceo/api/breeds/image/random/50'
    )
    commit('setBreeds', [...new Set(resp.message.map((e) => e.split('/')[4]))])
    commit('setImages', resp.message)
    commit('setFilteredImages', resp.message)
  },
  filterImagesByBreed({ commit, state }, payload) {
    commit('setFilter', payload)
    commit(
      'setFilteredImages',
      state.images.filter((i) => i.includes(payload))
    )
  },
  filterReset({ commit, state }) {
    commit('setFilter', false)
    commit('setFilteredImages', state.images)
  },
}
