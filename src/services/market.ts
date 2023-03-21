import Get from 'api/get'

export const getTradePriceChanges = async () => {
  const response = await Get({
    endpoint: `/api/trade/price-changes`,
  })

  return {
    status: response?.code,
    data: response?.payload || [],
    message: response?.message,
  }
}
export const getWalletSupportedCurrencies = async () => {
  const response = await Get({
    endpoint: `/api/wallet/supportedCurrencies`,
  })

  return {
    status: response?.code,
    data: response?.payload || [],
    message: response?.message,
  }
}
