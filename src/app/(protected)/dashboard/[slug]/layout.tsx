import React from 'react'
import Sidebar from '@/components/global/sidebar'

type Props = {
  children: React.ReactNode,
  params: { slug: string }
}

const Layout = ({ children, params }: Props) => {
  return (
    <div className={'p-3'}>
      {/*Sidebar*/}
      <Sidebar slug={params.slug} />
      {children}
    </div>
  )
}

export default Layout