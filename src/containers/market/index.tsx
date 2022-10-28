/**
 *
 * ContainerMarket
 *
 */

import React from 'react'
import PagesMarket from '@/pages/market'
import { useFetchTradePriceChanges } from 'src/hooks/market'

const ContainerMarket: React.FC = () => {
  const { data, isLoading } = useFetchTradePriceChanges()

  console.log(data, 'scs')
  return <PagesMarket />
}

export default ContainerMarket


