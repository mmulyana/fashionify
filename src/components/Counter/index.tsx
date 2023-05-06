import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type Props = {
  value: number
  enc: () => void
  inc: () => void
}

export default function Counter({ value, enc, inc }: Props) {
  return (
    <div className='flex items-center justify-between gap-3 p-2 rounded-lg border border-gray-300'>
      <button
        className='w-8 h-8 flex items-center justify-center text-xs rounded-full bg-gray-100 text-slate-500'
        onClick={enc}
      >
        <AiOutlineMinus />
      </button>
      <div className='w-6 h-6 flex items-center justify-center text-slate-800 font-semibold'>
        <p>{value}</p>
      </div>
      <button
        className='w-8 h-8 flex items-center justify-center text-xs rounded-full bg-gray-100 text-slate-500'
        onClick={inc}
      >
        <AiOutlinePlus/>
      </button>
    </div>
  )
}
