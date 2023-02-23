import { githubApi } from '../../api/githubApi'
import { Issue } from '../interfaces'

export const getIssueComments = async (issueNumber: number):Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`)
  return data
}
