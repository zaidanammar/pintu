import React from 'react'

import ContainerMarket from 'containers/market'
import MetaHeader from '@/molecules/meta-header'
import { Market } from '@/constants/seo'

const Page = () => (
  <>
    <MetaHeader
      title={Market.title}
      description={Market.description}
      keywords={Market.keywords}
      image={Market.image}
    />
    <ContainerMarket />
  </>
)

export default Page
