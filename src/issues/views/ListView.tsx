import { useState } from 'react'
import { Loading } from '../../shared/components'
import { IssueList } from '../components/IssueList'
import { LabelPicker } from '../components/LabelPicker'
import { useIssues } from '../hooks/useIssues'
import { State } from '../interfaces'

const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [state, setState] = useState<State>()
  const { issuesQuery } = useIssues({ state, selectedLabels })

  const onLabelChanged = (labelName: string) => (
    selectedLabels.includes(labelName)
      ? setSelectedLabels((prevSelectedLabel) => prevSelectedLabel.filter(
        (label) => label !== labelName
      ))
      : setSelectedLabels((prevSelectedLabel) => [...prevSelectedLabel, labelName])
  )

  return (
    
    <div className="row mt-5">
      
      <div className="col-8">
        {
          issuesQuery.isLoading 
            ? <Loading />
            : (
              <IssueList
                issues={issuesQuery.data || []}
                state={state}
                onStateChanged={(newState) => setState(newState)}
              />
            )
        }
      </div>
      
      <div className="col-4">
        <LabelPicker 
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChanged(labelName)}
        />
      </div>
    </div>
  )
}

export default ListView
