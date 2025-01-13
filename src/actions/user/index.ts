'use server'

import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { createUser, findUser } from '@/actions/user/queries'
import { refreshToken } from '@/lib/fetch'
import { updateIntegration } from '@/actions/integrations/queries'

export const onCurrentUser = async () => {
  const user = await currentUser()
  if (!user) return redirect('/sign-in')

  return user
}

export const onBoardUser = async () => {
  const user = await onCurrentUser()
  try {
    const found = await findUser(user.id)
    if (found) {
      if (found.integrations.length > 0) {
        const today = new Date()
        const time_left =
          found.integrations[0].expiresAt!.getTime() - today.getTime()
        const days = Math.round(time_left / (1000 * 60 * 60 * 24))
        if (days < 5) {
          console.log('refresh token')
          const refresh = await refreshToken(found.integrations[0].token)
          const today = new Date()
          const expire_date = today.setDate(today.getDate() + 60)
          const update_token = await updateIntegration({
            id: found.integrations[0].id,
            token: refresh.access_token,
            expire: new Date(expire_date),
          })
          if (!update_token) {
            console.log('Update token failed')
          }
        }
      }
      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname,
        },
      }
    }
    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress,
    )
    return {
      status: 201,
      data: created,
    }
  } catch (error) {
    console.log(error)
    return {
      status: 500,
      data: 'Internal Server Error',
    }
  }
}
