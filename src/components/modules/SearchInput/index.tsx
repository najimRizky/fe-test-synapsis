"use client"

import Input from "@/components/base/Input"
import SearchIcon from "@/components/icons/SearchIcon"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import ISearchInput from "./interface"

const SearchInput = ({placeholder}: ISearchInput) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const query = searchParams.get("q") || ""

  const [search, setSearch] = useState(query)

  useEffect(() => {
    const handler = setTimeout(() => {
      if (search !== query) {
        handleSearch(search)
      }
    }, 800)
    return () => clearTimeout(handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearch = (searchQuery: string) => {
    if (searchQuery === "") {
      router.push(`${pathname}`)
      return
    }

    const queryString = new URLSearchParams(searchParams)
    queryString.delete("page")
    queryString.set("q", searchQuery)

    router.push(`${pathname}?${queryString}`)
  }

  return (
    <>
      <Input
        placeholder={placeholder}
        className="mt-4 mb-4"
        value={search}
        onChange={handleChange}
        icon={<SearchIcon width={22} />}
        iconPosition="right"
      />
      {query && (
        <div className="mb-8 sm:text-center text-xl sm:text-3xl text-gray-600 mt-0">
          Showing results for <b>{query}</b>
        </div>
      )}
    </>
  )
}

export default SearchInput
