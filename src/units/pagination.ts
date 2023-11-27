export const paginationSplitter = (
  array: any[],
  offset: number,
  limit: number,
) => {
  if (offset < 0 || limit < 0) return array
  return array.slice(offset, offset + limit)
}
