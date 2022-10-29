/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import { getTradePriceChanges } from 'services/market'
import ContainerMarket from 'containers/market'
import MetaHeader from '@/molecules/meta-header'
import { Market } from '@/constants/seo'

const Page = () => (
  <>
    <MetaHeader
      title={Market.title}
      description={Market.description}
      keywords={Market.keywords}
      image={Market.image}
    />
    <ContainerMarket />
  </>
)

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  //   prefetch data on the server
  // await queryClient.fetchQuery(['wallet-supported-currencies'], () =>
  //   getWalletSupportedCurrencies(),
  // )
  await queryClient.fetchQuery(['trade-price-changes'], () => getTradePriceChanges())

  return {
    props: {
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Page
