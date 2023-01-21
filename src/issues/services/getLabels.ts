import { githubApi } from '../../api/githubApi'
import { sleep } from '../../helpers/sleep'
import { Label } from '../interfaces'

export const getLabelsFromApi = async ():Promise<Label[]> => {
  await sleep(2)

  const { data } = await githubApi.get<Label[]>('/labels', {
    headers: {
      Authorization: '' 
    }
  })
  return data
}
