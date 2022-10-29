/* eslint-disable no-nested-ternary */
import React from 'react'
import Image from 'next/image'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { toRupiah } from 'utils/common'
import type { Trade } from '@/types/trade'

interface TableHeaderProps {
  title: string
  className?: string
}

const TableHeader = ({ title, className }: TableHeaderProps) => (
  <th className={`p-5 border-b border-t ${className}`}>
    <p>{title}</p>
  </th>
)

interface TradeArrowTextProps {
  percentage: string
}

const TradeArrowText = ({ percentage }: TradeArrowTextProps) => (
  <div className="flex flex-row items-center justify-center">
    {Number(percentage) > 0 && <AiOutlineCaretUp className="w-6 h-5 text-green-500" />}
    {Number(percentage) < 0 && <AiOutlineCaretDown className="w-6 h-5 text-red-500" />}
    <p
      className={
        Number(percentage) > 0
          ? 'text-green-500'
          : Number(percentage) < 0
          ? 'text-red-500'
          : 'text-black'
      }
    >
      {percentage || '0.00'}%
    </p>
  </div>
)

interface MoleculesCryptoTableProps {
  dataTradePriceChanges: Trade[]
  dataSupportedCurrencies: any
}

const MoleculesCryptoTable: React.FC<MoleculesCryptoTableProps> = ({
  dataTradePriceChanges,
  dataSupportedCurrencies,
}) => {
  console.log(dataSupportedCurrencies)

  console.log(dataTradePriceChanges?.length, dataSupportedCurrencies?.length)

//   useEffect(() => {
//     const prev = dataTradePriceChanges


//   }, [dataTradePriceChanges])

  return (
    <table className="w-full rounded-lg">
      <thead>
        <tr className="text-secondary font-semibold font-text">
          <TableHeader title="CRYPTO" className="pl-[75px] text-left border-l rounded-tl-lg" />
          <TableHeader title="HARGA" className="text-left" />
          <TableHeader title="24 JAM" />
          <TableHeader title="1 MGG" />
          <TableHeader title="1 BLN" />
          <TableHeader title="1 THN" className="border-r" />
        </tr>
      </thead>
      <tbody>
        {dataTradePriceChanges &&
          dataSupportedCurrencies &&
          dataTradePriceChanges?.map((item: Trade, idx: number) => (
            <tr key={item.pair} className="font-semibold font-text">
              <td className="p-5 border-b border-l">
                <div className="flex items-center gap-6">
                  <div className="flex items-center flex-1 ml-1">
                    <Image
                      src={dataSupportedCurrencies[idx + 1]?.logo}
                      alt={dataSupportedCurrencies[idx + 1]?.currencyGroup}
                      width={24}
                      height={24}
                      loading="lazy"
                      color={dataSupportedCurrencies[idx + 1]?.color}
                    />
                    <p className="ml-6">{dataSupportedCurrencies[idx + 1]?.name}</p>
                  </div>
                  <p className="pr-8  text-secondary font-medium">
                    {dataSupportedCurrencies[idx + 1]?.currencyGroup}
                  </p>
                </div>
              </td>
              <td className="w-[220px] p-5 border-b">
                <p className={Number(item.latestPrice) > 0 ? 'text-green-500' : 'text-red-500'}>
                  {toRupiah(item.latestPrice).replaceAll(',', '.')}
                </p>
              </td>
              <td className="w-[130px] border-b">
                <TradeArrowText percentage={item.day} />
              </td>
              <td className="w-[130px] border-b">
                <TradeArrowText percentage={item.week} />
              </td>
              <td className="w-[130px] border-b">
                <TradeArrowText percentage={item.month} />
              </td>
              <td className="w-[130px] border-b border-r">
                <TradeArrowText percentage={item.year} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default MoleculesCryptoTable
