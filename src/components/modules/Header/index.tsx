"use client"

import CloseIcon from "@/components/icons/CloseIcon"
import MenuIcon from "@/components/icons/MenuIcon"
import headerLinks, { IHeaderLink } from "@/config/headerLinks"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Header = () => {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (state: boolean = !isMenuOpen) => {
    setIsMenuOpen(state)

    if (state) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

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

          {/* Desktop Menu */}
          <div className="hidden sm:flex absolute left-[50%] top-0 h-full items-center translate-x-[-50%] ">
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
          <div className="text-sm font-bold px-4 h-full items-center hidden sm:block">
            ABOUT
          </div>

          {/* Mobile responsive menu */}
          <div className="block sm:hidden cursor-pointer" onClick={() => toggleMenu(true)}>
            <MenuIcon width={32} />
          </div>
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isMenuOpen ? 'block' : 'hidden'}`}
            onClick={() => toggleMenu(false)}
          >
            {/* Mobile Menu */}
            <div className="absolute top-0 right-0 h-full w-[16rem] bg-white p-4">
              <div className="cursor-pointer w-fit ms-auto mb-4" onClick={() => toggleMenu(false)}>
                <CloseIcon width={32} />
              </div>
              <div className="flex-col flex gap h-full">
                {headerLinks.map((link: IHeaderLink) => (
                  <Link
                    href={link.path}
                    key={link.path}
                    className={`
                      text-sm font-bold p-2 hover:bg-teal-100 duration-300 text-right
                      ${pathName === link.path ? 'bg-teal-500 text-white hover:bg-teal-500' : ''}
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header