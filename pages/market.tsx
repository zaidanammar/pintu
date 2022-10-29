/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import { getTradePriceChanges, getWalletSupportedCurrencies } from 'services/market'
import ContainerMarket from 'containers/market'
import MetaHeader from '@/molecules/meta-header'
import { Market } from '@/constants/seo'

const Page = (props: any) => {
  // console.log(props?.dehydratedState.queries[0].state, '<< tes')

  const dataTradePriceChanges = props?.dehydratedState?.queries[0]?.state?.data?.data
  return (
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
}

// export const getServerSideProps = async () => {
//   const queryClient = new QueryClient()

//   //   prefetch data on the server
//   await queryClient.fetchQuery(['wallet-supported-currencies'], () =>
//     getWalletSupportedCurrencies(),
//   )
//   await queryClient.fetchQuery(['trade-price-changes'], () => getTradePriceChanges())

//   // const data = await getTradePriceChanges()
//   return {
//     props: {
//       // data,
//       // dehydrate query cache
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }

export default Page
