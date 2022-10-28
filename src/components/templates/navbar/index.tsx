import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

import { logo } from 'src/assets'
import { link } from 'config/link'

const TemplatesNavbar = () => (
  <nav className="py-8 px-6 flex justify-between items-center container mx-auto">
    <Image src={logo} alt="logo" height="16" width="75" priority />
    <div className="md:flex hidden items-center xl:gap-24 lg:gap-20 md:gap-10">
      {link.map((el) => (
        <Link
          key={el.title}
          href={el.href}
          className="text-base cursor-pointer hover:text-opacity-60 text-black font-text"
        >
          {el.type === 'image' ? (
            <Image
              src={el.title}
              alt="country"
              priority
              width={32}
              height={10}
              className="border"
            />
          ) : (
            el.title
          )}
        </Link>
      ))}
    </div>
    <div className="md:hidden flex">
      <AiOutlineMenu size={24} className="cursor-pointer" />
    </div>
  </nav>
)

export default TemplatesNavbar
