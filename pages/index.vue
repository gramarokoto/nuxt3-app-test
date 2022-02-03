<template>
  <div>
    <button @click="store.counter--">-</button>
    <span>{{ store.getCount }}</span>
    <button @click="store.counter++">+</button>
    <br>
    <button @click="load()">data</button>
    <div v-if="company">
      Company : {{ company.business_name }}
    </div>
    <div v-if="bank">
      Bank : {{ bank.bank_name }}
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "~~/store"
import { useCompany } from "~~/composables/useCompany"
import { useBank } from "~~/composables/useBank"

export default defineComponent({
  async setup() {
    const store = useStore()
    let company = ref(null)
    let bank = ref(null)

    const load = async () => {
      company.value = await useCompany()
      bank.value = await useBank()
    }

    return { store, load, company, bank }
  }
})
</script>
