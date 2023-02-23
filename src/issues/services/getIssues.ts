import { githubApi } from '../../api/githubApi'
import { Issue, State } from '../interfaces'

interface Props {
  labels: string[],
  page?: number,
  state?: State
}

export const getIssues = async ({
  labels,
  page = 1,
  state
}: Props):Promise<Issue[]> => {
  const params = new URLSearchParams()

  if (state) params.append('state', state)

  if (labels.length) {
    const labelsString = labels.join(',')
    params.append('labels', labelsString)
  }

  params.append('page', page.toString())
  params.append('per_page', '5')

  const { data } = await githubApi.get<Issue[]>('/issues', { params })
  return data
}
