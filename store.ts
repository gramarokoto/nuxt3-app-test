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
      // this is undefined
      this.counter++
    },
    decrement: () => {
      // this is undefined ??!
      this.counter--
    }
  },
})
