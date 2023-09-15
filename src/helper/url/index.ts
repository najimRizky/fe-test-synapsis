export const createQueryString = ({
  searchParams,
  name,
  value
}: {
  searchParams: string | URLSearchParams
  name: string
  value: string | number
}) => {
  const params = new URLSearchParams(searchParams)
  params.set(name, value.toString())

  return params.toString()
}