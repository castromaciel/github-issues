import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../services/getIssues'

export const useIssues = () => {
  const issuesQuery = useQuery(
    ['issues'],
    getIssues

  )

  return {
    issuesQuery
  }
}
