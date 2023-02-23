import { githubApi } from '../../api/githubApi'
import { Label } from '../interfaces'

export const getLabels = async ():Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100', {
    headers: {
      Authorization: '' 
    }
  })
  return data
}
