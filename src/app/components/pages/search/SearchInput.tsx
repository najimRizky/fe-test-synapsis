"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'

const SearchInput = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [search, setSearch] = useState<string>(searchParams.get('q') || "")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
    if (search === "") {
      router.push('/search')
      return
    }

    router.push('/search?' + createQueryString('q', search))
  }

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)

    return params.toString()
  }, [searchParams])

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} className='text-black' />
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchInput