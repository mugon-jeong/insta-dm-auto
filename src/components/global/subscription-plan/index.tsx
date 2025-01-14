import React from 'react'
import { useQueryUser } from '@/hooks/user-queries'

type Props = {
  type: 'FREE' | 'PRO'
  children: React.ReactNode
}

const SubscriptionPlan = ({ children, type }: Props) => {
  const { data } = useQueryUser()
  return data?.data?.subscription?.plan === type && children
}

export default SubscriptionPlan
