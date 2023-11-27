import { initialCity, initialFilter } from './constants.ts'
import { Filter } from './types.ts'
import { User } from '../../types/user.ts'

export const useFilterUsers = (list: User[], filters: Filter) => {
  const filterByGender = (list: User[], byGender: string) => {
    return byGender === initialFilter.gender
      ? list
      : list.filter(({ gender }) => byGender === gender)
  }

  const filterByCountry = (list: User[], byCountry: string) => {
    return byCountry === initialFilter.country
      ? list
      : list.filter(({ country }) => byCountry === country)
  }

  const filterByCity = (list: User[], byCity: string) => {
    return byCity === initialFilter.city
      ? list
      : list.filter(({ city }) => byCity === city)
  }

  const filteredByGender = filterByGender(list, filters.gender)
  const filteredByCountry = filterByCountry(filteredByGender, filters.country)
  const filteredByCity = filterByCity(filteredByCountry, filters.city)

  return { amountOfUsers: filteredByCity.length, users: filteredByCity }
}

// List of cities for collection (items) in select for filter
export const useCitiesBasedOnCountry = (users: User[], filters: Filter) => {
  if (initialFilter.country === filters.country) return [initialCity]
  return [
    initialCity,
    ...users
      .filter(({ country }) => country === filters.country)
      .map(({ city }) => ({ value: city, label: city })),
  ]
}
