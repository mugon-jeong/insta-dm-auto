import React from 'react'
import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

const Notifications = () => {
  return (
    <Button className={'bg-white rounded-full py-6'}>
      <Bell color={'#3352CC'} fill={'#3352CC'} />
    </Button>
  )
}

export default Notifications
