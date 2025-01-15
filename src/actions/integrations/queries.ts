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

export const getIntegration = async (clerkId: string) => {
  return client.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      integrations: {
        where: {
          name: 'INSTAGRAM',
        },
      },
    },
  })
}

export const createIntegration = async (
  clerkId: string,
  token: string,
  expire: Date,
  igId?: string,
) => {
  return client.user.update({
    where: {
      clerkId,
    },
    data: {
      integrations: {
        create: {
          token,
          expiresAt: expire,
          instagramId: igId,
        },
      },
    },
    select: {
      firstname: true,
      lastname: true,
    },
  })
}
