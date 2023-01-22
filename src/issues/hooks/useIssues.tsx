import { useQuery } from '@tanstack/react-query'
import { State } from '../interfaces'
import { getIssues } from '../services'

interface Props {
  state?: State
  labels: string[]
}

export const useIssues = ({ labels, state }:Props) => {
  const issuesQuery = useQuery(
    ['issues', { state, labels }],
    () => getIssues(labels, state)
  )

  return {
    issuesQuery
  }
}
