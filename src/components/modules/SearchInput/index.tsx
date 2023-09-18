"use client"

import Input from "@/components/base/Input"
import SearchIcon from "@/components/icons/SearchIcon"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import ISearchInput from "./interface"
import Spinner from "../Spinner"

const SearchInput = ({ placeholder }: ISearchInput) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const query = searchParams.get("q") || ""

  const [search, setSearch] = useState(query)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handler = setTimeout(() => {
      if (search !== query) {
        handleSearch(search)
      }
    }, 800)
    return () => clearTimeout(handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  useEffect(() => {
    if (loading) {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setLoading(true)
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
        icon={loading ? <Spinner size={20} /> : <SearchIcon width={22} />}
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
