import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  state: () => ({
    isLoaded: false,
  })
})
