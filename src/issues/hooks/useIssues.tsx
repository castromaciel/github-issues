import { useQuery } from '@tanstack/react-query'
import { State } from '../interfaces'
import { getIssues } from '../services'

interface Props {
  state?: State
  selectedLabels: string[]
}

export const useIssues = ({ selectedLabels, state }:Props) => {
  const issuesQuery = useQuery(
    ['issues', { state, selectedLabels }],
    () => getIssues(selectedLabels, state)
  )

  return {
    issuesQuery
  }
}
