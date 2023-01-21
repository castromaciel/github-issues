import { useQuery } from '@tanstack/react-query'
import { getIssueInfo } from '../services'

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssueInfo(issueNumber)
  )

  return {
    issueQuery
  }
}
