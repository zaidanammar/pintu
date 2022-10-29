export const toRupiah = (number: number | bigint | string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  })
    .format(Number(number))
    .replaceAll(',', '.')
    .replaceAll('IDR', 'Rp')
