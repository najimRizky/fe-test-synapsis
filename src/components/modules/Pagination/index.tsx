"use client"

import { createQueryString } from "@/helper/url"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import IPagination from "./interface"
import { thousandSeparator } from "@/helper/number"

const perPage = 10

const Pagination = ({ maxPage, page, totalElement = 0 }: IPagination) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const showStart = page * perPage - perPage + 1
  const showEnd = page * perPage > totalElement ? totalElement : page * perPage

  const handlePrev = () => {
    if (page === 1) return
    const queryString = createQueryString({
      name: 'page',
      value: page - 1,
      searchParams: searchParams
    })
    router.push(`${pathname}?${queryString}`)
  }

  const handleNext = () => {
    if (page === maxPage) return
    const queryString = createQueryString({
      name: 'page',
      value: page + 1,
      searchParams: searchParams
    })
    router.push(`${pathname}?${queryString}`)
  }

  return (
    <div className="flex justify-between mt-8 items-center">
      <div className="text-gray-600">
        Showing <b>{thousandSeparator(showStart)}</b> to <b>{thousandSeparator(showEnd)}</b>  of <b>{thousandSeparator(totalElement)}</b> data
      </div>
      <div className="flex items-center gap-x-2 ">
        <button
          className={`
          bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-8 rounded-l duration-300 
          ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}
        `}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className={`
          bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-8 rounded-r duration-300
          ${page === maxPage ? 'opacity-50 cursor-not-allowed' : ''}
        `}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination