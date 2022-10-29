/**
 *
 * ContainerMarket
 *
 */

import React from 'react'

import { useFetchTradePriceChanges, useFetchWalletSupportedCurrencies } from 'src/hooks/market'
import PagesMarket from '@/pages/market'

const ContainerMarket: React.FC = () => {
  const { data: dataTradePriceChanges } = useFetchTradePriceChanges()
  const { data: dataSupportedCurrencies } = useFetchWalletSupportedCurrencies()

  return (
    <PagesMarket
      dataTradePriceChanges={dataTradePriceChanges?.data}
      dataSupportedCurrencies={dataSupportedCurrencies?.data}
    />
  )
}

export default ContainerMarket
