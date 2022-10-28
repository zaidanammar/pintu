import React from 'react'
import Searchbar from '@/atoms/Searchbar'

const MoleculesHeadline = () => (
  <section className="md:pt-4 pb-4 px-4 md:mb-6 container mx-auto flex items-center justify-between gap-2">
    <h1 className="font-heading font-semibold md:text-[28px] text-xl leading-[34px]">
      Harga Crypto dalam Rupiah Hari Ini
    </h1>

    <Searchbar />
  </section>
)

export default MoleculesHeadline
