import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'

import { toRupiah } from 'utils/common'
import TokenArrowText from '@/atoms/TokenArrowText'
import type { Token } from '@/types/token'

type FilterTimeType = 'day' | 'week' | 'month' | 'year'

interface MoleculesTokenTableMobileProps {
  dataTradePriceChanges: Token[]
  dataSupportedCurrencies: any
}

const MoleculesTokenTableMobile: React.FC<MoleculesTokenTableMobileProps> = ({
  dataTradePriceChanges,
  dataSupportedCurrencies,
}) => {
  const [filterTime, setFilterTime] = useState<FilterTimeType>('day')

  const onChangeTime = (e: any) => setFilterTime(e.target.value)

  return (
    <section>
      <aside className="flex items-center p-4 border-t border-b gap-4">
        <div className="flex-1">
          <p className="text-xs font-semibold font-text">CRYPTO</p>
        </div>
        <div>
          <select
            onChange={onChangeTime}
            className="text-xs font-text font-semibold border rounded-md p-1"
          >
            <option value="day">24 JAM</option>
            <option value="week">1 MGG</option>
            <option value="month">1 BLN</option>
            <option value="year">1 THN</option>
          </select>
        </div>
      </aside>

      <aside>
        {dataTradePriceChanges &&
          dataSupportedCurrencies &&
          dataTradePriceChanges?.map((item: Token, idx: number) => (
            <div className="flex p-4 gap-4 border-b items-center" key={item.pair}>
              <div>
                <div
                  style={{
                    width: '32px',
                    color: `${dataSupportedCurrencies[idx + 1]?.color}`,
                  }}
                >
                  <ReactSVG src={dataSupportedCurrencies[idx + 1]?.logo} />
                </div>
              </div>
              <div className="flex-1 flex flex-row font-text gap-2">
                <div className="flex-1">
                  <p className="text-base font-semibold">
                    {dataSupportedCurrencies[idx + 1]?.name}
                  </p>
                  <p className="text-sm font-normal text-secondary">
                    {dataSupportedCurrencies[idx + 1]?.currencyGroup}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-semibold text-[#171717]">{toRupiah(item.latestPrice)}</p>

                  <TokenArrowText percentage={item[filterTime]} />
                </div>
              </div>
            </div>
          ))}
      </aside>
    </section>
  )
}

export default MoleculesTokenTableMobile
