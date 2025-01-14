import React from 'react'
import PopOver from '@/components/global/popover'
import { BlueAddIcon } from '@/icons'

type Props = {
  children: React.ReactNode
  label: string
}
const TriggerButton = ({ label, children }: Props) => {
  return (
    <PopOver
      className={'w-[400px]'}
      trigger={
        <div
          className={
            'border-2 border-dashed w-full border-[#3352CC] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5'
          }
        >
          <BlueAddIcon />
          <p className={'text-[#768BDD] font-bold'}>{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  )
}
export default TriggerButton
