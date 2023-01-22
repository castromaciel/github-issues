import { githubApi } from '../../api/githubApi'
import { sleep } from '../../helpers/sleep'
import { Issue, State } from '../interfaces'

export const getIssues = async (
  labels: string[],
  state?: State
):Promise<Issue[]> => {
  await sleep(2)

  const params = new URLSearchParams()

  if (state) params.append('state', state)

  if (labels.length) {
    const labelsString = labels.join(',')
    params.append('labels', labelsString)
  }

  params.append('page', '1')
  params.append('per_page', '5')

  const { data } = await githubApi.get<Issue[]>('/issues', { params })
  return data
}
