import { PaginationType } from '../../types'
import { SetURLSearchParams } from 'react-router-dom'

interface Props extends PaginationType {
  total: number
  params: URLSearchParams
  setParams: SetURLSearchParams
  changePaginationOptions: (options: Partial<PaginationType>) => void
}

export const usePaginationHooks = ({
  total,
  offset,
  limit,
  setParams,
  params,
  changePaginationOptions,
}: Props) => {
  const limitParam = params.get('limit')
  const offsetParam = params.get('offset')

  const isPrevOffsetDisabled = offset - limit < 0
  const isNextOffsetDisabled = offset + limit >= total
  const updatePaginationOptionsAndParams = (limit: number, offset: number) => {
    changePaginationOptions({ limit, offset })
    setParams((prev) => ({ ...prev, limit, offset }), { replace: true })
  }

  const prevOffset = () => {
    if (isPrevOffsetDisabled) {
      updatePaginationOptionsAndParams(limit, 0)
      return
    }
    updatePaginationOptionsAndParams(limit, offset - limit)
  }
  const nextOffset = () => {
    if (isNextOffsetDisabled) return
    updatePaginationOptionsAndParams(limit, offset + limit)
  }

  const changeLimit = (limit: number) =>
    updatePaginationOptionsAndParams(limit, 0)

  const setUpParamsFromUrl = (limits: number[]) => {
    const defaultLimit = limits[0]
    if (
      // If there are no params in url
      !limitParam ||
      !offsetParam ||
      // If params are negative
      +limitParam < 0 ||
      +offsetParam < 0 ||
      // If params are not numbers
      !Number.isInteger(+limitParam) ||
      !Number.isInteger(+offsetParam) ||
      // If offset plus limit is too big
      +limitParam + +offsetParam > total ||
      // If passed limit in url is incorrect to existed
      !limits.includes(+limitParam)
    ) {
      // In these cases set up default options
      updatePaginationOptionsAndParams(defaultLimit, 0)
      return
    }

    updatePaginationOptionsAndParams(+limitParam, +offsetParam)
  }

  return {
    isPrevOffsetDisabled,
    isNextOffsetDisabled,
    setUpParamsFromUrl,
    prevOffset,
    nextOffset,
    changeLimit,
  }
}
