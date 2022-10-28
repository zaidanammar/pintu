import Image from 'next/image'
import React from 'react'

interface AtomsChipProps {
  title: string
  icon?: any
}

const AtomsChip = ({ title, icon }: AtomsChipProps) => (
  <div className="p-2 rounded-lg flex flex-row items-center bg-softBlue whitespace-nowrap">
    <div className="flex items-center gap-2">
      {icon && (
        <div className="w-6 h-6">
          <Image src={icon} loading="lazy" alt={title} width={24} height={24} />
        </div>
      )}
      <span className="text-xs whitespace-nowrap font-text font-semibold text-hardBlue">
        {title}
      </span>
    </div>
  </div>
)

export default AtomsChip
