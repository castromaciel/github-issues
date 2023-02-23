import { githubApi } from '../../api/githubApi'
import { Issue, State } from '../interfaces'

interface Props {
  labels: string[],
  page?: number,
  state?: State
}

interface QueryProps {
  pageParam?: number
  queryKey: (string | Props) []
}

export const getIssuesInfinite = async ({
  queryKey,
  pageParam = 1
}: QueryProps):Promise<Issue[]> => {
  const [,, args] = queryKey
  const { labels, state } = args as Props

  const params = new URLSearchParams()

  if (state) params.append('state', state)

  if (labels.length) {
    const labelsString = labels.join(',')
    params.append('labels', labelsString)
  }

  params.append('page', pageParam.toString())
  params.append('per_page', '5')

  const { data } = await githubApi.get<Issue[]>('/issues', { params })
  return data
}
