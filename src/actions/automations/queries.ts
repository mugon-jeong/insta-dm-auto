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

export const addListener = async (
  automationId: string,
  listener: 'SMARTAI' | 'MESSAGE',
  prompt: string,
  reply?: string,
) => {
  return client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      listener: {
        create: {
          listener,
          prompt,
          commentReply: reply,
        },
      },
    },
  })
}

export const addTrigger = async (automationId: string, trigger: string[]) => {
  if (trigger.length === 2) {
    return client.automation.update({
      where: {
        id: automationId,
      },
      data: {
        trigger: {
          createMany: {
            data: [{ type: trigger[0] }, { type: trigger[1] }],
          },
        },
      },
    })
  }
  return client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      trigger: {
        create: {
          type: trigger[0],
        },
      },
    },
  })
}

export const addKeyWord = async (automationId: string, keyword: string) => {
  return client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      keywords: {
        create: {
          word: keyword,
        },
      },
    },
  })
}

export const deleteKeywordQuery = async (id: string) => {
  return client.keyword.delete({
    where: { id },
  })
}

export const addPost = async (
  autmationId: string,
  posts: {
    postid: string
    caption?: string
    media: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
  }[],
) => {
  return client.automation.update({
    where: {
      id: autmationId,
    },
    data: {
      posts: {
        createMany: {
          data: posts,
        },
      },
    },
  })
}
