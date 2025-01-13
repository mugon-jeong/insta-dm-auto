'use server'

import { onCurrentUser } from '@/actions/user'
import {
  createAutomation,
  findAutomation,
  getAutomation,
  updateAutomation,
} from '@/actions/automations/queries'

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser()
  try {
    const create = await createAutomation(user.id, id)
    if (create) return { status: 200, data: 'Automation created' }
    return { status: 404, data: 'Oops! something went wrong' }
  } catch (e) {
    console.log(e)
    return { status: 500, data: 'Internal server error' }
  }
}

export const getAllAutomations = async () => {
  const user = await onCurrentUser()
  try {
    const automations = await getAutomation(user.id)
    if (automations) return { status: 200, data: automations.automations }
    return { status: 404, data: [] }
  } catch (e) {
    console.log(e)
    return { status: 500, data: [] }
  }
}

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser()
  try {
    const automation = await findAutomation(id)
    if (automation) return { status: 200, data: automation }
    return { status: 404, data: 'Automation not found' }
  } catch (e) {
    console.log(e)
    return { status: 500, data: 'Internal server error' }
  }
}

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string
    active?: boolean
    automation?: string
  },
) => {
  await onCurrentUser()
  try {
    const update = await updateAutomation(automationId, data)
    if (update) {
      return { status: 200, data: 'Automation updated' }
    }
    return { status: 404, data: 'Automation not found' }
  } catch (e) {
    console.log(e)
    return { status: 500, data: 'Internal server error' }
  }
}
