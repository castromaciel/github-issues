import { useQuery } from '@tanstack/react-query'
import { getIssueComments, getIssueInfo } from '../services'

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssueInfo(issueNumber)
  )
  const commentsQuery = useQuery(
    ['issue', issueNumber, 'comments'],
    () => getIssueComments(issueNumber),
    {
      enabled: !!issueQuery.data
    }
  )

  return {
    issueQuery,
    commentsQuery
  }
}
