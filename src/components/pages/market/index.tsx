import React from 'react'

import Navbar from '@/templates/navbar'
import TopMover from '@/organisms/top-movers'
import Headline from '@/molecules/headline'
import Tags from '@/molecules/tags'
import TokenList from '@/organisms/token-list'
import type { Token } from '@/types/token'

interface MoleculesTokenTableProps {
  dataTradePriceChanges: Token[]
  dataSupportedCurrencies: any
}

const PagesMarket: React.FC<MoleculesTokenTableProps> = ({
  dataTradePriceChanges,
  dataSupportedCurrencies,
}) => (
  <main>
    <Navbar />
    <Headline />
    <TopMover />
    <Tags />
    <TokenList
      dataTradePriceChanges={dataTradePriceChanges}
      dataSupportedCurrencies={dataSupportedCurrencies}
    />
  </main>
)

export default PagesMarket
