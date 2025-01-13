'use server'

import { client } from '@/lib/prisma'

export const updateIntegration = async ({
  id,
  token,
  expire,
}: {
  id: string
  token: string
  expire: Date
}) => {
  return client.integrations.update({
    where: { id },
    data: {
      token,
      expiresAt: expire,
    },
  })
}
