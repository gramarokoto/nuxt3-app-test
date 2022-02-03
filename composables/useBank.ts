export const useBank = async () => {
  const { data } = await useAsyncData(
    'random_bank',
    () => $fetch('https://random-data-api.com/api/bank/random_bank'))
  return data.value
}