import { PaginationType } from '../../types'
import { Filter } from './types.ts'
import { SelectItems } from '../../UI'
import USERS from '../../data/customers.json'

export const initialPaginationOptions: PaginationType = {
  offset: 0,
  limit: 10,
}

export const initialFilter: Filter = {
  gender: 'Select gender',
  country: 'Select country',
  city: 'Select city',
}

export const GENDERS: SelectItems[] = [
  { label: initialFilter.gender, value: null },
  ...[...new Set(USERS.map(({ gender }) => gender))].map((gender) => ({
    label: gender,
    value: gender,
  })),
]

export const COUNTRIES: SelectItems[] = [
  { label: initialFilter.country, value: null },
  ...[...new Set(USERS.map(({ country }) => country))].map((country) => ({
    label: country,
    value: country,
  })),
]

export const initialCity = { label: initialFilter.city, value: null }
