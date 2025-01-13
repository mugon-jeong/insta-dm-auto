import { useQuery } from '@tanstack/react-query'
import { getAllAutomations, getAutomationInfo } from '@/actions/automations'

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: ['user-automations'],
    queryFn: getAllAutomations,
  })
}

export const useQueryAutomation = (id: string) => {
  return useQuery({
    queryKey: ['automation-info'],
    queryFn: () => getAutomationInfo(id),
  })
}
