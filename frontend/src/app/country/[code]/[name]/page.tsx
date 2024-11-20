import { getCountryInfo } from "@/services/countries"
import CountryDetails from "@/components/CountryDetails"

interface Props {
  params: { code: string; name: string }
}

export default async function CountryPage({ params }: Props) {
  const { code, name } = await params

  const country = await getCountryInfo(code, name)

  return <CountryDetails country={country} />
}
