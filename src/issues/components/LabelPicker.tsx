import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../../api/githubApi'
import { LabelsRs } from '../interfaces/LabelsRs'

const getLabelsFromApi = async ():Promise<LabelsRs[]> => {
  const { data } = await githubApi.get<LabelsRs[]>('/labels')
  console.log(data)
  return data
}

export const LabelPicker = () => {
  const labelsQuery = useQuery(
    ['labels'],
    getLabelsFromApi
  )

  return (
    <div>
      <span 
        className="badge rounded-pill m-1 label-picker"
        style={{ border: '1px solid #ffccd3', color: '#ffccd3' }}
      >
        Primary
      </span>
        
    </div>
  )
}
