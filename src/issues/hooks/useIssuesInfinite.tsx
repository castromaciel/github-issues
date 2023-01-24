import { useInfiniteQuery } from '@tanstack/react-query'
import { State } from '../interfaces'
import { getIssuesInfinite } from '../services'

interface Props {
  state?: State
  labels: string[]
}

export const useIssuesInfinite = ({ state, labels }: Props) => {
  const issuesQuery = useInfiniteQuery(
    ['issues', 'infinite', { state, labels, page: 1 }],
    (data) => getIssuesInfinite(data),
    {
      // TODO: getNextPageParam()
    }
  )

  return {
    issuesQuery
  }
}
