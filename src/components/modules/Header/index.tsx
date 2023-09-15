"use client"

import headerLinks, { IHeaderLink } from "@/config/headerLinks"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathName = usePathname()
  return (
    <header className="shadow-sm sticky top-0 bg-body-bg z-10">
      <div className="container">
        <div className="flex justify-between items-center relative">
          <Link
            href="/"
            className="my-2"
          >
            <div className="text-[2.125rem] font-bold  leading-none">
              S-BLOG
            </div>
            <div className="text-xs -mt-1">
              Synapsis Blog
            </div>
          </Link>
          <div className="flex absolute left-[50%] top-0 h-full items-center translate-x-[-50%]">
            {headerLinks.map((link: IHeaderLink) => (
              <Link
                href={link.path}
                key={link.path}
                className={`
                  text-sm font-bold px-4 h-full flex items-center hover:bg-teal-100
                  duration-300
                  ${pathName === link.path ? 'bg-teal-500 text-white hover:bg-teal-500' : ''}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            Search
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header