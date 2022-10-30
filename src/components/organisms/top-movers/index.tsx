import React from 'react'

import TopMoversCard from '@/molecules/top-movers/card'
import type { Token } from '@/types/token'
import type { Currency } from '@/types/currency'

interface OrganismsTopMoverProps {
  dataTradePriceChanges: Token[]
  dataSupportedCurrencies: Currency[]
}

const OrganismsTopMover: React.FC<OrganismsTopMoverProps> = ({
  dataSupportedCurrencies,
  dataTradePriceChanges,
}) => {
  const dataTopMover =
    dataSupportedCurrencies &&
    dataTradePriceChanges &&
    dataSupportedCurrencies?.slice(1, 6).map((el, idx) => ({
      latestPrice: dataTradePriceChanges[idx]?.latestPrice,
      percentage: dataTradePriceChanges[idx]?.day,
      ...el,
    }))

  return (
    <section className="px-4 container mx-auto items-center justify-between gap-2 mb-6">
      <h2 className="text-xl font-heading font-semibold">🔥 Top Movers (24 Jam)</h2>

      <article className="mt-2 flex gap-6 flex-row overflow-x-auto">
        {dataTopMover?.map((currency) => (
          <TopMoversCard currency={currency} key={currency.name} />
        ))}
      </article>
    </section>
  )
}

export default OrganismsTopMover
