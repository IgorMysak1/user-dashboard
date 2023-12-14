import styled from 'styled-components'
import { Button } from '../button/button.tsx'
import { ArrowIcon } from '../../assets/icons/arrow.tsx'
import { Select } from '../select/select.tsx'
import { PaginationType } from '../../types'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePaginationHooks } from './hooks'
import { breakpoints } from '../../constants'

interface PaginationProps extends PaginationType {
  total: number
  changePaginationOptions: (options: Partial<PaginationType>) => void
  limits?: number[]
}

export const Pagination = ({
  limit,
  offset,
  total,
  changePaginationOptions,
  limits = [10, 20, 50],
}: PaginationProps) => {
  const [params, setParams] = useSearchParams()

  const pagination = usePaginationHooks({
    offset,
    limit,
    total,
    params,
    setParams,
    changePaginationOptions,
  })

  useEffect(() => {
    pagination.setUpParamsInUrl(limits)
  }, [])

  return (
    <Wrapper>
      {`${offset} - ${offset + limit} / ${total}`}
      <PrevButton
        onClick={pagination.prevOffset}
        disabled={pagination.isPrevOffsetDisabled}
      >
        <ArrowIcon />
      </PrevButton>
      <Select
        value={limit}
        onChange={({ target }) => pagination.changeLimit(+target.value)}
        items={limits.map((limit) => ({ label: limit, value: limit }))}
      />
      <ArrowButton
        onClick={pagination.nextOffset}
        disabled={pagination.isNextOffsetDisabled}
      >
        <ArrowIcon />
      </ArrowButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
  @media (max-width: ${breakpoints.xs}px) {
    gap: 10px;
  }
`

const ArrowButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PrevButton = styled(ArrowButton)`
  transform: rotate(180deg);
`
