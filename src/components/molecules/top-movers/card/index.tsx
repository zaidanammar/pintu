import React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { ReactSVG } from 'react-svg'
import { Currency } from '@/types/currency'
import { toRupiah } from 'utils/common'

interface CurrencyType extends Currency {
  latestPrice: string
  percentage: string
}

interface MoleculesTopMoversCardProps {
  currency: CurrencyType
}

const MoleculesTopMoversCard: React.FC<MoleculesTopMoversCardProps> = ({ currency }) => (
  <div className="p-4 w-96 font-text cursor-pointer hover:transition-colors hover:bg-neutral duration-300 ease-in-out">
    <div className="flex gap-2 items-center mb-3">
      <div
        style={{
          width: '32px',
          color: `${currency?.color}`,
        }}
      >
        <ReactSVG src={currency?.logo} />
      </div>
      <p className="text-xl font-semibold truncate">{currency.name}</p>
    </div>
    <p className="text-sm mb-2 text-secondary">{toRupiah(currency.latestPrice)}</p>
    <div className="text-green-500 flex items-center gap-1">
      <AiOutlineCaretDown className="w-6 h-5" />
      <p className="text-xl font-bold font-text truncate"> {currency.percentage || '0.00'}%</p>
    </div>
  </div>
)

export default MoleculesTopMoversCard
