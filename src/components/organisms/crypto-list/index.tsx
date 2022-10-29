import React from 'react'

import CryptoTable from '@/molecules/table/crypto-table'
import type { Trade } from '@/types/trade'

interface OrganismsCryptoListProps {
  dataTradePriceChanges: Trade[]
  dataSupportedCurrencies: any
}

const OrganismsCryptoList: React.FC<OrganismsCryptoListProps> = ({
  dataTradePriceChanges,
  dataSupportedCurrencies,
}) => (
  <section className="container px-4 mx-auto mb-6">
    <CryptoTable
      dataTradePriceChanges={dataTradePriceChanges}
      dataSupportedCurrencies={dataSupportedCurrencies}
    />
  </section>
)

export default OrganismsCryptoList
