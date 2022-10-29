import React from 'react'

import Navbar from '@/templates/navbar'
import TopMover from '@/organisms/top-movers'
import Headline from '@/molecules/headline'
import Tags from '@/molecules/tags'
import CryptoList from '@/organisms/crypto-list'
import type { Trade } from '@/types/trade'

interface MoleculesCryptoTableProps {
  dataTradePriceChanges: Trade[]
  dataSupportedCurrencies: any
}

const PagesMarket: React.FC<MoleculesCryptoTableProps> = ({
  dataTradePriceChanges,
  dataSupportedCurrencies,
}) => (
  <main>
    <Navbar />
    <Headline />
    <TopMover />
    <Tags />
    <CryptoList
      dataTradePriceChanges={dataTradePriceChanges}
      dataSupportedCurrencies={dataSupportedCurrencies}
    />
  </main>
)

export default PagesMarket
