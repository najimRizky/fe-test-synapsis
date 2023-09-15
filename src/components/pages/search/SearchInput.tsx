"use client"

import { createQueryString } from '@/helper/url'
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

    const queryString = createQueryString({
      name: 'q',
      value: search,
      searchParams: searchParams
    })

    router.push(`/search?${queryString}`)
  }

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} className='text-black' />
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchInput