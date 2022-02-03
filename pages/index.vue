<template>
  <div>
    <button @click="store.counter--">-</button>
    <span>{{ store.getCount }}</span>
    <button @click="store.counter++">+</button>
    <button @click="load()">data</button>
    <div>
      Company : {{ company }}
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "~~/store"
import { useCompany } from "~~/composables/useCompany"

export default defineComponent({
  async setup() {
    const store = useStore()
    let company = ref(null)

    const load = async () => {
      company.value = await useCompany()
    }

    return { store, company, load }
  }
})
</script>
