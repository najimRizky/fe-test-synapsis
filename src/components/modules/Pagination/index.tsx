"use client"

import { createQueryString } from "@/helper/url"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import IPagination from "./interface"
import { thousandSeparator } from "@/helper/number"
import Button from "@/components/base/Button"

const perPage = 10

const Pagination = ({ maxPage, page, totalElement = 0, customHandler }: IPagination) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const showStart = page * perPage - perPage + 1
  const showEnd = page * perPage > totalElement ? totalElement : page * perPage

  const handlePrev = () => {
    if (page === 1) return
    if (customHandler?.previous) return customHandler.previous()

    const queryString = createQueryString({
      name: 'page',
      value: page - 1,
      searchParams: searchParams
    })
    router.push(`${pathname}?${queryString}`)
  }

  const handleNext = () => {
    if (page === maxPage) return
    if (customHandler?.next) return customHandler.next()

    const queryString = createQueryString({
      name: 'page',
      value: page + 1,
      searchParams: searchParams
    })
    router.push(`${pathname}?${queryString}`)
  }

  return (
    <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
      <div className="text-gray-600">
        Showing <b>{thousandSeparator(showStart)}</b> to <b>{thousandSeparator(showEnd)}</b>  of <b>{thousandSeparator(totalElement)}</b> data
      </div>
      <div className="flex items-center gap-x-2 ">
        <Button
          onClick={handlePrev}
          disabled={page === 1}
          bgColor="bg-gray-200"
          color="text-gray-600"
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          disabled={page === maxPage}
          bgColor="bg-gray-200"
          color="text-gray-600"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Pagination