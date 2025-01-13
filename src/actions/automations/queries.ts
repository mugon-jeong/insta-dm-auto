'use server'

import { client } from '@/lib/prisma'

export const createAutomation = async (clerkId: string, id?: string) => {
  return client.user.update({
    where: {
      clerkId,
    },
    data: {
      automations: {
        create: {
          ...(id && { id }),
        },
      },
    },
  })
}

export const getAutomation = async (clerkId: string) => {
  return client.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      automations: {
        orderBy: {
          createdAt: 'asc',
        },
        include: {
          keywords: true,
          listener: true,
        },
      },
    },
  })
}

export const findAutomation = async (id: string) => {
  return client.automation.findUnique({
    where: {
      id,
    },
    include: {
      keywords: true,
      listener: true,
      posts: true,
      trigger: true,
      User: {
        select: {
          subscription: true,
          integrations: true,
        },
      },
    },
  })
}

export const updateAutomation = async (
  id: string,
  update: {
    name?: string
    active?: boolean
  },
) => {
  return client.automation.update({
    where: { id },
    data: {
      name: update.name,
      active: update.active,
    },
  })
}
