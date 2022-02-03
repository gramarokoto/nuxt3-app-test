export const useCompany = async () => {
  const { data } = await useFetch('https://random-data-api.com/api/company/random_company')
  return data.value
}