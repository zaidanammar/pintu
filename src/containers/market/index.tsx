/**
 *
 * ContainerMarket
 *
 */

import React from 'react'
import PagesMarket from '@/pages/market'
import { useFetchTradePriceChanges, useFetchWalletSupportedCurrencies } from 'src/hooks/market'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { getTradePriceChanges, getWalletSupportedCurrencies } from 'services/market'

const ContainerMarket: React.FC = () => {
  const { data: dataTradePriceChanges } = useFetchTradePriceChanges()
  const { data: dataSupportedCurrencies } = useFetchWalletSupportedCurrencies()

  return (
    <PagesMarket
      dataTradePriceChanges={dataTradePriceChanges?.data}
      dataSupportedCurrencies={dataSupportedCurrencies?.data}
    />
  )
}

export default ContainerMarket

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  //   prefetch data on the server
  //   await queryClient.fetchQuery(['wallet-supported-currencies'], () =>
  //     getWalletSupportedCurrencies(),
  //   )
  await queryClient.fetchQuery(['trade-price-changes'], () => getTradePriceChanges())
  return {
    props: {
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient),
    },
  }
}
