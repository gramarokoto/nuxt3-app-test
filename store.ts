import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
      counter: 0
  }),
  getters: {
    getCount: (state) => state.counter
  },
  actions: {
    increment: () => {
      // FIX : this is undefined
      this.counter++
    },
    decrement: () => {
      // FIX : this is undefined ??!
      this.counter--
    }
  },
})
