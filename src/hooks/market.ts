import { useQuery } from '@tanstack/react-query'
import { getTradePriceChanges } from 'services/market'

const useFetchTradePriceChanges = () =>
  useQuery(['trade-price-changes'], () => getTradePriceChanges(), {
    refetchOnWindowFocus: false,
  })

export { useFetchTradePriceChanges }
