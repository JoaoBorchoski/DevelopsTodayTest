export const getAvailableCountries = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries/available`)
  return res.json()
}

export const getCountryInfo = async (code: string, name: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries/info/${code}/${encodeURIComponent(name)}`)
  return res.json()
}
