export class CountryInfoDto {
  borders: string[] = [];
  population: { year: number; value: number }[] = [];
  flag: string = '';
}
