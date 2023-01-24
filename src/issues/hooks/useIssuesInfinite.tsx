/* eslint-disable consistent-return */
import { useInfiniteQuery } from '@tanstack/react-query'
import { State } from '../interfaces'
import { getIssuesInfinite } from '../services'

interface Props {
  state?: State
  labels: string[]
}

export const useIssuesInfinite = ({ state, labels }: Props) => {
  const issuesQuery = useInfiniteQuery(
    ['issues', 'infinite', { state, labels }],
    (data) => getIssuesInfinite(data),
    {
      // TODO: getNextPageParam()
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.length) return

        return pages.length + 1
      }
    }
  )

  return {
    issuesQuery
  }
}
