import React from 'react'
import Sidebar from '@/components/global/sidebar'
import InfoBar from '../../../../components/global/infoBar'

type Props = {
  children: React.ReactNode
  params: { slug: string }
}

const Layout = ({ children, params }: Props) => {
  return (
    <div className={'p-3'}>
      {/*Sidebar*/}
      <Sidebar slug={params.slug} />
      {/*Navbar*/}
      <div
        className={'lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'}
      >
        <InfoBar slug={params.slug} />
        {children}
      </div>
    </div>
  )
}

export default Layout
