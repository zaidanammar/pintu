/**
 *
 * ContainerMarket
 *
 */

import React from 'react'

import PagesMarket from '@/pages/market'
import { useFetchTradePriceChanges, useFetchWalletSupportedCurrencies } from 'src/hooks/market'
import type { Token } from '@/types/token'

interface ContainerMarketProps {
  dataTradePriceChanges: Token[]
}

const ContainerMarket: React.FC<ContainerMarketProps> = () => {
  const { data: dataTradePriceChanges } = useFetchTradePriceChanges()
  const { data: dataSupportedCurrencies } = useFetchWalletSupportedCurrencies()

//   console.log(dataTradePriceChanges, '<><>')
  return (
    <PagesMarket
      dataTradePriceChanges={dataTradePriceChanges?.data}
      dataSupportedCurrencies={dataSupportedCurrencies?.data}
    />
  )
}

export default ContainerMarket
