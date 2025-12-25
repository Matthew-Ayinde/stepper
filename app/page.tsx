import HomePage from '@/components/homepage/HomePage'
import ThemePicker from '@/components/shared/ThemePicker'
import { NotificationTestPanel } from '@/components/shared/NotificationTestPanel'
import React from 'react'

const page = () => {
  return (
    <div>
      <HomePage />
      <ThemePicker />
      <NotificationTestPanel />
    </div>
  )
}

export default page
