import { client } from '@/lib/prisma'

export const matchKeyword = async (keyword: string) => {
  return client.keyword.findFirst({
    where: {
      word: {
        equals: keyword,
        mode: 'insensitive',
      },
    },
  })
}

export const getKeywordAutomation = async (
  automationId: string,
  dm: boolean,
) => {
  return client.automation.findUnique({
    where: {
      id: automationId,
    },

    include: {
      dms: dm,
      trigger: {
        where: {
          type: dm ? 'DM' : 'COMMENT',
        },
      },
      listener: true,
      User: {
        select: {
          subscription: {
            select: {
              plan: true,
            },
          },
          integrations: {
            select: {
              token: true,
            },
          },
        },
      },
    },
  })
}
