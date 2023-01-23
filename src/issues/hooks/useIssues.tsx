import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { State } from '../interfaces'
import { getIssues } from '../services'

interface Props {
  state?: State
  labels: string[]
}

export const useIssues = ({ labels, state }:Props) => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [labels, state])

  const issuesQuery = useQuery(
    ['issues', { state, labels, page }],
    () => getIssues({ labels, page, state })
  )

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return
    setPage(page + 1)
  }
  const prevPage = () => {
    if (page > 1) setPage(page - 1)
  }
 
  return {
    // Properties
    issuesQuery,

    // Getter
    page: issuesQuery.isFetching ? 'Loading...' : page,

    // Methods
    nextPage,
    prevPage
  }
}
