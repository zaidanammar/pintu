/* eslint-disable no-nested-ternary */
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

interface TokenArrowTextProps {
  percentage: string
}

const TokenArrowText = ({ percentage }: TokenArrowTextProps) => (
  <div className="flex flex-row items-center justify-center">
    {Number(percentage) > 0 && <AiOutlineCaretUp className="w-6 h-5 text-green-500" />}
    {Number(percentage) < 0 && <AiOutlineCaretDown className="w-6 h-5 text-red-500" />}
    <p
      className={`md:text-base text-sm font-semibold ${
        Number(percentage) > 0
          ? 'text-green-500'
          : Number(percentage) < 0
          ? 'text-red-500'
          : 'text-black'
      }`}
    >
      {percentage || '0.00'}%
    </p>
  </div>
)

export default TokenArrowText
