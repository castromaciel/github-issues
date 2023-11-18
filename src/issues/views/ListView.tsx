import { useState } from 'react'
import IssueListContainer from '../components/IssueListContainer'
import { LabelPicker } from '../components/LabelPicker'
import { useIssues } from '../hooks/useIssues'
import { State } from '../interfaces'

const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [state, setState] = useState<State>()
  const {
    issuesQuery, page, nextPage, prevPage 
  } = useIssues({ state, labels: selectedLabels })

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
        <IssueListContainer 
          isLoading={issuesQuery.isLoading}
          onStateChanged={(newState) => setState(newState)}
          issues={issuesQuery.data || []}
          state={state}
        />

        <div className="d-flex mt-2 justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={prevPage}
            disabled={page === 1 || issuesQuery.isFetching}
          >
            Prev
          </button>
          <span>{page}</span>
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={nextPage}
            disabled={issuesQuery.isFetching}
          >
            Next

          </button>
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

export default ListView
