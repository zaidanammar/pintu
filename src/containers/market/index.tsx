/**
 *
 * ContainerMarket
 *
 */

import React from 'react'

import PagesMarket from '@/pages/market'
import type { Token } from '@/types/token'
import type { Currency } from '@/types/currency'

interface ContainerMarketProps {
  dataTradePriceChanges: Token[]
  dataSupportedCurrencies: Currency[]
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
