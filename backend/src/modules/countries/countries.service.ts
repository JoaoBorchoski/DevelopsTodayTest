import { Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class CountriesService {
  async getAvailableCountries() {
    const response = await axios.get(
      `${process.env.NAGER_API}/AvailableCountries`,
    )
    return response.data
  }

  async getCountryInfo(code: string, name: string) {
    try {
      const [borderRes, popRes, flagRes] = await Promise.all([
        axios.get(`${process.env.NAGER_API}/CountryInfo/${code}`),
        axios.post(`${process.env.COUNTRIES_API}/countries/population`, {
          country: name,
        }),
        axios.post(`${process.env.COUNTRIES_API}/countries/flag/images`, {
          country: name,
        }),
      ])

      return {
        borders: borderRes.data.borders || [],
        population: popRes.data.data.populationCounts || [],
        flag: flagRes.data.data.flag || '/path/to/default-flag.png',
      }
    } catch (error) {
      console.error(`Error fetching country info for ${name}:`, error)

      return {
        borders: [],
        population: [],
        flag: '/path/to/default-flag.png',
      }
    }
  }
}
