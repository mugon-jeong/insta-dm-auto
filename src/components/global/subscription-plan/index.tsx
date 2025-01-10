import React from 'react'

type Props = {
  type: 'FREE' | 'PRO'
  children: React.ReactNode
}

const SubscriptionPlan = ({ children, type }: Props) => {
  return children
}

export default SubscriptionPlan