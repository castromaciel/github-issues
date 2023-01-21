import { githubApi } from '../../api/githubApi'
import { Issue } from '../interfaces'

export const getIssues = async ():Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>('/issues')
  return data
}
