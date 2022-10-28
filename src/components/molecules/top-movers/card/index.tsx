import React from 'react'
import Image from 'next/image'
import { AiOutlineCaretDown } from 'react-icons/ai'

const MoleculesTopMoversCard = () => (
  <div className="p-4 w-[190px] cursor-pointer hover:transition-colors hover:bg-neutral duration-300 ease-in-out">
    <div className="flex gap-2 items-center mb-3">
      <Image
        src="https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_APT.svg"
        alt="token"
        loading="lazy"
        width={24}
        height={24}
      />
      <p className="text-xl font-semibold font-text truncate">Aptos</p>
    </div>
    <p className="text-sm mb-2 text-secondary">Rp.12.500</p>
    <div className="text-red-500 flex items-center gap-1">
      <AiOutlineCaretDown className="w-6 h-5" />
      <p className="text-xl font-bold font-text truncate">12.99%</p>
    </div>
  </div>
)

export default MoleculesTopMoversCard
