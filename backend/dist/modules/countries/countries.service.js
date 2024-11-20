"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let CountriesService = class CountriesService {
    async getAvailableCountries() {
        const response = await axios_1.default.get(`${process.env.NAGER_API}/AvailableCountries`);
        return response.data;
    }
    async getCountryInfo(code, name) {
        try {
            const [borderRes, popRes, flagRes] = await Promise.all([
                axios_1.default.get(`${process.env.NAGER_API}/CountryInfo/${code}`),
                axios_1.default.post(`${process.env.COUNTRIES_API}/countries/population`, {
                    country: name,
                }),
                axios_1.default.post(`${process.env.COUNTRIES_API}/countries/flag/images`, {
                    country: name,
                }),
            ]);
            return {
                borders: borderRes.data.borders || [],
                population: popRes.data.data.populationCounts || [],
                flag: flagRes.data.data.flag || '/path/to/default-flag.png',
            };
        }
        catch (error) {
            console.error(`Error fetching country info for ${name}:`, error);
            return {
                borders: [],
                population: [],
                flag: '/path/to/default-flag.png',
            };
        }
    }
};
exports.CountriesService = CountriesService;
exports.CountriesService = CountriesService = __decorate([
    (0, common_1.Injectable)()
], CountriesService);
