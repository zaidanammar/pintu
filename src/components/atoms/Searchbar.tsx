import React from 'react'
import Image from 'next/image'

import { searchIcon } from 'src/assets'

const AtomsSearchbar = () => (
  <div>
    <div className="md:flex hidden flex-row w-96 py-3 px-4 cursor-pointer rounded-lg bg-neutral">
      <Image src={searchIcon} alt="search" loading="lazy" />
      <div className="ml-4 flex-1">
        <div className="text-sm leading-5 w-full text-secondary">Cari aset di Pintu...</div>
      </div>
    </div>
    <div className="md:hidden flex cursor-pointer">
      <Image src={searchIcon} alt="search" loading="lazy" />
    </div>
  </div>
)

export default AtomsSearchbar
