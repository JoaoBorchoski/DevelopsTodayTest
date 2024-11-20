import { Controller, Get, Param, Query } from '@nestjs/common'
import { CountriesService } from './countries.service'

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('available')
  async getAvailableCountries() {
    return await this.countriesService.getAvailableCountries()
  }

  @Get('info/:code/:name')
  async getCountryInfo(
    @Param('code') code: string,
    @Param('name') name: string,
  ) {
    return await this.countriesService.getCountryInfo(code, name)
  }
}
