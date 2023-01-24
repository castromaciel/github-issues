import { useState } from 'react'
import { Loading } from '../../shared/components'
import { IssueList } from '../components/IssueList'
import { LabelPicker } from '../components/LabelPicker'
import { useIssuesInfinite } from '../hooks'
import { State } from '../interfaces'

const ListViewInfinite = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [state, setState] = useState<State>()
  const {
    issuesQuery
  } = useIssuesInfinite({ state, labels: selectedLabels })

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
                issues={issuesQuery.data?.pages.flat() || []}
                state={state}
                onStateChanged={(newState) => setState(newState)}
              />
            )
        }
        <div className="mt-2">
          <button type="button" className="btn btn-outline-light">Load More</button>
        </div>

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

export default ListViewInfinite
