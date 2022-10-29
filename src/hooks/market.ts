import { useQuery } from '@tanstack/react-query'
import { getTradePriceChanges, getWalletSupportedCurrencies } from 'services/market'

const useFetchTradePriceChanges = () =>
  useQuery(['trade-price-changes'], () => getTradePriceChanges(), {
    refetchOnWindowFocus: false,
    refetchInterval: 1000,
  })

const useFetchWalletSupportedCurrencies = () =>
  useQuery(['wallet-supported-currencies'], () => getWalletSupportedCurrencies(), {
    refetchOnWindowFocus: false,
  })

export { useFetchTradePriceChanges, useFetchWalletSupportedCurrencies }
