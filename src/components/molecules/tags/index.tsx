import React from 'react'
import Chip from '@/atoms/Chip'
import { tags } from 'config/tags'

const MoleculesTags = () => (
  <section className="px-4 container mx-auto">
    <div className="flex flex-row gap-2 overflow-x-auto">
      {tags.map((tag) => (
        <Chip key={tag.title} title={tag.title} icon={tag.icon} />
      ))}
    </div>
  </section>
)

export default MoleculesTags
