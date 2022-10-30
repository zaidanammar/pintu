import React from 'react'
import { ReactSVG } from 'react-svg'

import { toRupiah } from 'utils/common'
import TokenArrowText from '@/atoms/TokenArrowText'
import type { Token } from '@/types/token'

interface TableHeaderProps {
  title: string
  className?: string
}

const TableHeader = ({ title, className }: TableHeaderProps) => (
  <th className={`p-5 border-b border-t ${className}`}>
    <p>{title}</p>
  </th>
)

interface MoleculesTokenTableProps {
  dataTradePriceChanges: Token[]
  dataSupportedCurrencies: any
}

const MoleculesTokenTable: React.FC<MoleculesTokenTableProps> = ({
  dataTradePriceChanges,
  dataSupportedCurrencies,
}) => (
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
        dataTradePriceChanges?.map((item: Token, idx: number) => (
          <tr key={item.pair} className="font-semibold font-text">
            <td className="p-5 border-b border-l">
              <div className="flex items-center gap-6">
                <div className="flex items-center ml-1">
                  <div
                    style={{
                      width: '32px',
                      color: `${dataSupportedCurrencies[idx + 1]?.color}`,
                    }}
                  >
                    <ReactSVG src={dataSupportedCurrencies[idx + 1]?.logo} />
                  </div>
                </div>
                <div className="lg:flex flex-1 flex-wrap">
                  <p className="flex-1">{dataSupportedCurrencies[idx + 1]?.name}</p>
                  <p className="mr-6 w-14 flex lg:justify-end text-secondary font-medium">
                    {dataSupportedCurrencies[idx + 1]?.currencyGroup}
                  </p>
                </div>
              </div>
            </td>
            <td className="w-[220px] p-5 border-b">
              <p className="text-green-500">{toRupiah(item.latestPrice)}</p>
            </td>
            <td className="w-[130px] border-b">
              <TokenArrowText percentage={item.day} />
            </td>
            <td className="w-[130px] border-b">
              <TokenArrowText percentage={item.week} />
            </td>
            <td className="w-[130px] border-b">
              <TokenArrowText percentage={item.month} />
            </td>
            <td className="w-[130px] border-b border-r">
              <TokenArrowText percentage={item.year} />
            </td>
          </tr>
        ))}
    </tbody>
  </table>
)

export default MoleculesTokenTable
