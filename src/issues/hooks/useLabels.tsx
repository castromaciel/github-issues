import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../../api/githubApi'
import { sleep } from '../../helpers/sleep'
import { LabelsRs } from '../interfaces/LabelsRs'

const getLabelsFromApi = async ():Promise<LabelsRs[]> => {
  await sleep(2)

  const { data } = await githubApi.get<LabelsRs[]>('/labels')
  return data
}

export const useLabels = () => {
  const labelsQuery = useQuery(
    ['labels'],
    getLabelsFromApi,
    {
      staleTime: 1000 * 60 * 60
    }
  )
  
  return labelsQuery
}
