import React from 'react'

type Props = {
  options: {
    label: string
    value: string
  }[]
  selectedOption: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Radio({ options, onChange, selectedOption }: Props) {
  return (
    <div className='mt-8 flex gap-2 items-center'>
      {options.map((option) => (
        <label key={option.value} htmlFor={option.value}>
          <input
            type='radio'
            value={option.value}
            id={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
            hidden
          />
          <div
            className={[
              'w-10 h-10 rounded border flex items-center justify-center text-xs cursor-pointer',
              selectedOption === option.value ? 'border-slate-800 shadow bg-slate-800 text-white' : 'border-gray-400'
            ].join(' ')}
          >
            {option.label}
          </div>
        </label>
      ))}
    </div>
  )
}
