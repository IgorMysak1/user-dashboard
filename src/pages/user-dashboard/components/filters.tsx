import styled from 'styled-components'
import { Dispatch, SetStateAction } from 'react'

import { Select, Button } from '../../../UI'
import { COUNTRIES, GENDERS, initialFilter } from '../constants'
import { Filter } from '../types.ts'
import { User } from '../../../types/user'
import { useCitiesBasedOnCountry } from '../hooks.ts'
import { breakpoints } from '../../../constants'

interface FiltersPros {
  users: User[]
  filterOptions: Filter
  setFilterOptions: Dispatch<SetStateAction<Filter>>
}
export const Filters = ({
  users,
  filterOptions,
  setFilterOptions,
}: FiltersPros) => {
  const citiesBasedOnCountry = useCitiesBasedOnCountry(users, filterOptions)
  const changeFilter = <T extends keyof Filter>(field: T, value: Filter[T]) => {
    setFilterOptions((prevFilterOptions) => ({
      ...prevFilterOptions,
      ...(field === 'country' && { city: initialFilter.city }),
      [field]: value,
    }))
  }
  const resetFilters = () => setFilterOptions(initialFilter)

  return (
    <Wrapper>
      <Select
        value={filterOptions.gender}
        onChange={(e) => changeFilter('gender', e.target.value)}
        items={GENDERS}
      />
      <Select
        value={filterOptions.country}
        onChange={(e) => changeFilter('country', e.target.value)}
        items={COUNTRIES}
      />
      <Select
        disabled={initialFilter.country === filterOptions.country}
        value={filterOptions.city}
        onChange={(e) => changeFilter('city', e.target.value)}
        items={citiesBasedOnCountry}
      />
      <Button onClick={resetFilters}>Reset</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: ${breakpoints.sm}px) {
    align-items: flex-start;
    flex-direction: column;
  }
`
