import { githubApi } from '../../api/githubApi'
import { sleep } from '../../helpers/sleep'
import { Issue, State } from '../interfaces'

export const getIssues = async (
  selectedLabels: string[],
  state?: State
):Promise<Issue[]> => {
  await sleep(2)

  const params = new URLSearchParams()

  if (state) params.append('state', state)

  const { data } = await githubApi.get<Issue[]>('/issues', { params })
  return data
}
