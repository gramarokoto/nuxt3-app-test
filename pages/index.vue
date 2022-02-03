<template>
  <div>
    <button @click="store.counter--">-</button>
    <span>{{ store.getCount }}</span>
    <button @click="store.counter++">+</button>
    <button>data</button>
  </div>
</template>

<script>
import { useStore } from "~~/store"
export default defineComponent({
  setup() {
    const store = useStore()
    
    return { store }
  }
})
</script>
