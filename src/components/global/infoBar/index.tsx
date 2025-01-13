'use client'
import React from 'react'
import { usePaths } from '@/hooks/user-nav'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import Sheet from '@/components/global/sheet'
import { Menu } from 'lucide-react'
import Items from '@/components/global/sidebar/items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '@/components/global/clerk-auth-state'
import { HelpDuoToneWhite } from '@/icons'
import SubscriptionPlan from '@/components/global/subscription-plan'
import UpgradeCard from '@/components/global/sidebar/upgrade'
import LogoSmall from '@/svgs/logo-small'
import CreateAutomation from '@/components/global/create-automation'
import Search from '@/components/global/infoBar/search'
import Notifications from '@/components/global/infoBar/notifications'
import MainBreadCrumb from '@/components/global/bread-crumbs/main-bread-crumb'

type Props = {
  slug: string
}
const InfoBar = ({ slug }: Props) => {
  const { page } = usePaths()
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug
  return (
    currentPage && (
      <div className={'flex flex-col'}>
        <div className={'flex gap-x-3 lg:gap-x-5 justify-end'}>
          <span className={'lg:hidden flex items-center flex-1 gap-x-2'}>
            <Sheet side={'left'} trigger={<Menu />} className={'lg:hidden'}>
              <div
                className={
                  'flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur_safari backdrop-blur-3xl'
                }
              >
                <div className={'flex gap-x-2 items-center p-5 justify-center'}>
                  <LogoSmall />
                </div>
                <div className={'flex flex-col py-3'}>
                  <Items page={page} slug={slug} />
                </div>
                <div className={'px-16'}>
                  <Separator
                    orientation={'horizontal'}
                    className={'bg-[#5C5C5F]'}
                  />
                </div>
                <div className={'px-3 flex flex-col gap-y-5'}>
                  <div className={'flex gap-x-2'}>
                    <ClerkAuthState />
                    <p className={'text-[#9B9CA0]'}>Profile</p>
                  </div>
                  <div className={'flex gap-x-3'}>
                    <HelpDuoToneWhite />
                    <p className={'text-[#9B9CA0]'}>Help</p>
                  </div>
                </div>
                <SubscriptionPlan type={'FREE'}>
                  <div className={'flex-1 flex flex-col'}></div>
                </SubscriptionPlan>
                <UpgradeCard />
              </div>
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb page={page === slug ? 'Home' : page} slug={slug} />
      </div>
    )
  )
}

export default InfoBar
