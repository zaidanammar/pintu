/**
 *
 * ContainerMarket
 *
 */

import React from 'react'
import PagesMarket from '@/pages/market'
import { Token } from '@/types/token'

interface ContainerMarketProps {
  dataTradePriceChanges: Token[]
  dataSupportedCurrencies: any
}

const ContainerMarket: React.FC<ContainerMarketProps> = ({
  dataSupportedCurrencies,
  dataTradePriceChanges,
}) => (
  <PagesMarket
    dataTradePriceChanges={dataTradePriceChanges}
    dataSupportedCurrencies={dataSupportedCurrencies}
  />
)

export default ContainerMarket
