import { githubApi } from '../../api/githubApi'
import { sleep } from '../../helpers/sleep'
import { Issue } from '../interfaces'

export const getIssueComments = async (issueNumber: number):Promise<Issue[]> => {
  await sleep(2)

  const { data } = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`)
  return data
}
