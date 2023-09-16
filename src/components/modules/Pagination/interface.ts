interface IPagination {
  page: number
  maxPage?: number
  totalElement?: number
  customHandler?: {
    previous?: () => void
    next?: () => void
  }
}

export default IPagination