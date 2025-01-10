'use client'
import React from 'react'
import { usePaths } from '@/hooks/user-nav'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {}

const AutomationList = () => {
  const { pathname } = usePaths()
  return (
    <div className={'flex flex-col gap-y-3'}>
      <Link
        href={`/${pathname}/123123`}
        className={
          'bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]'
        }
      >
        <div className={'flex flex-col flex-1 items-start'}>
          <h2 className={'text-xl font-semibold'}>Automation Name</h2>
          <p className={'text-[#9B9CA0] text-sm font-light mb-2'}>
            This is from the comment
          </p>
          <div className={'flex gap-x-2 flex-wrap mt-3'}>
            <div
              className={cn(
                'rounded-full px-4 py-1 capitalize',
                (0 + 1) % 1 == 0 &&
                  'bg-keyword-green/15 border-2 border-keyword-green',
                (1 + 1) % 1 == 0 &&
                  'bg-keyword-purple/15 border-2 border-keyword-purple',
                (2 + 1) % 1 == 0 &&
                  'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                (3 + 1) % 1 == 0 &&
                  'bg-keyword-red/15 border-2 border-keyword-red',
              )}
            >
              getstarted
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AutomationList
