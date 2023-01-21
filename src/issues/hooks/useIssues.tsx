import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../services'

export const useIssues = () => {
  const issuesQuery = useQuery(
    ['issues'],
    getIssues
  )

  return {
    issuesQuery
  }
}
