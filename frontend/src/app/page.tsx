import Link from "next/link"
import { getAvailableCountries } from "@/services/countries"

export default async function Home() {
  const countries = await getAvailableCountries()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full flex items-center justify-center py-8 bg-blue-600 shadow-lg">
        <h1 className="text-4xl text-white font-semibold">Available Countries</h1>
      </div>

      <div className="px-4 py-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {countries.map((country: { countryCode: string; name: string }) => (
            <li key={country.countryCode}>
              <Link
                href={`/country/${country.countryCode}/${encodeURIComponent(country.name)}`}
                className="block p-4 bg-white rounded-lg shadow hover:bg-blue-100 transition-all"
              >
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-800">{country.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">{country.countryCode}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
