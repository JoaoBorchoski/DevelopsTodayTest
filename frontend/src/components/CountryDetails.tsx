"use client"

import Link from "next/link"
import PopulationChart from "@/components/PopulationChart"

interface BorderCountry {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: string[] | null
}

interface PopulationData {
  year: number
  value: number
}

interface CountryDetailsProps {
  country: {
    name: string
    flag: string
    borders: BorderCountry[]
    population: PopulationData[]
  }
}

export default function CountryDetails({ country }: CountryDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header com título e bandeira */}
      <div className="bg-blue-600 text-white py-10 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">{country.name}</h1>
          <img
            src={country.flag}
            alt={`${country.name} Flag`}
            className="w-40 h-28 mt-6 mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-10">
        {/* Países Fronteiriços */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Border Countries</h2>
          {country.borders.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {country.borders.map((border) => (
                <li key={border.countryCode} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all">
                  <Link
                    href={`/country/${border.countryCode}/${encodeURIComponent(border.commonName)}`}
                    className="block"
                  >
                    <h3 className="text-lg font-medium text-gray-800">{border.commonName}</h3>
                    <p className="text-sm text-gray-600 mt-1">Official: {border.officialName}</p>
                    <p className="text-sm text-gray-500">Region: {border.region}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No border countries available.</p>
          )}
        </section>

        {/* Gráfico de População */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Population Over Time</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <PopulationChart data={country.population} />
          </div>
        </section>
      </div>
    </div>
  )
}
