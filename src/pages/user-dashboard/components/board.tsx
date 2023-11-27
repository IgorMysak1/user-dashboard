import { useEffect, useState } from 'react'
import { paginationSplitter } from '../../../units'
import { Pagination } from '../../../UI'
import { PaginationType } from '../../../types'
import { initialFilter, initialPaginationOptions } from '../constants'
import { UserCard } from './user-card.tsx'
import styled from 'styled-components'
import { Filters } from './filters.tsx'
import { Filter } from '../types.ts'
import { useFilterUsers } from '../hooks.ts'
import USERS from '../../../data/customers.json'
import { breakpoints } from '../../../constants'

const LOADING = false // request simulation
export const Dashboard = () => {
  const [filterOptions, setFilterOptions] = useState<Filter>(initialFilter)
  const [{ offset, limit }, setPaginationOptions] = useState<PaginationType>(
    initialPaginationOptions,
  )
  const { users, amountOfUsers } = useFilterUsers(USERS, filterOptions)
  const changePaginationOptions = (options: Partial<PaginationType>) => {
    setPaginationOptions((prevState) => ({ ...prevState, ...options }))
  }
  useEffect(
    () => setPaginationOptions(initialPaginationOptions),
    [filterOptions],
  )

  return (
    <Wrapper>
      <Filters
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        users={users}
      />
      {LOADING && <Notification>Loading...</Notification>}
      {!!users.length && !LOADING && (
        <Cards>
          {paginationSplitter(users, offset, limit).map((item) => (
            <UserCard key={item.id} {...item} />
          ))}
        </Cards>
      )}
      {!users.length && !LOADING && (
        <Notification>There are no users</Notification>
      )}
      <Pagination
        limit={limit}
        offset={offset}
        total={amountOfUsers}
        changePaginationOptions={changePaginationOptions}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  @media (max-width: ${breakpoints.xs}px) {
    gap: 10px;
  }
`

const Notification = styled.p`
  text-align: center;
  font-size: 24px;
  padding: 30px 0;
`
