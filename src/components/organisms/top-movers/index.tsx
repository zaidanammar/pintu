import React from 'react'

import TopMoversCard from '@/molecules/top-movers/card'

const OrganismsTopMover = () => (
  <section className="px-4 container mx-auto items-center justify-between gap-2 mb-6">
    <h2 className="text-xl font-heading font-semibold">🔥 Top Movers (24 Jam)</h2>

    <article className="mt-2 flex gap-6 flex-row overflow-x-auto">
      <TopMoversCard />
      <TopMoversCard />
      <TopMoversCard />
      <TopMoversCard />
      <TopMoversCard />
      <TopMoversCard />
    </article>
  </section>
)

export default OrganismsTopMover
