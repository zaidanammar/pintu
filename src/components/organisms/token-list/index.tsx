import React from 'react'

import TokenTable from '@/molecules/table/token-table'
import TokenTableMobile from '@/molecules/table/token-table-mobile'
import type { Token } from '@/types/token'
import type { Currency } from '@/types/currency'

interface OrganismsTokenListProps {
  dataTradePriceChanges: Token[]
  dataSupportedCurrencies: Currency[]
}

const OrganismsTokenList: React.FC<OrganismsTokenListProps> = ({
  dataTradePriceChanges,
  dataSupportedCurrencies,
}) => (
  <section className="container md:px-4 mx-auto mb-6">
    <div className="md:block hidden">
      <TokenTable
        dataTradePriceChanges={dataTradePriceChanges}
        dataSupportedCurrencies={dataSupportedCurrencies}
      />
    </div>

    <div className="md:hidden block">
      <TokenTableMobile
        dataTradePriceChanges={dataTradePriceChanges}
        dataSupportedCurrencies={dataSupportedCurrencies}
      />
    </div>
  </section>
)

export default OrganismsTokenList
