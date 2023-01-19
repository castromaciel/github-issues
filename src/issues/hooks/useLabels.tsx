import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../../api/githubApi'
import { LabelsRs } from '../interfaces/LabelsRs'

const getLabelsFromApi = async ():Promise<LabelsRs[]> => {
  const { data } = await githubApi.get<LabelsRs[]>('/labels')
  return data
}

export const useLabels = () => {
  const labelsQuery = useQuery(
    ['labels'],
    getLabelsFromApi
  )
  
  return labelsQuery
}
