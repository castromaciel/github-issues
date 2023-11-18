import { FC } from 'react'
import { IssueSkeleton } from '../../shared/components'
import { Issue, State } from '../interfaces'
import { IssueItem } from './IssueItem'

interface IssueListContainerProps {
  isLoading: boolean
  issues: Issue[]
  state?: State
  onStateChanged: (state?: State) => void
}

const IssueListContainer: FC<IssueListContainerProps> = ({
  isLoading,
  issues,
  onStateChanged,
  state
}) => (
  <div className="card border-white">
    <div className="card-header bg-dark-01">
      <ul className="nav nav-pills card-header-pills gap-3">
        <li className="nav-item">
          <button
            type="button"
            className={`btn btn-outline-light ${!state ? 'active' : ''}`}
            onClick={() => onStateChanged()}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button 
            type="button"
            className={`btn btn-outline-light ${state === State.Open ? 'active' : ''}`}
            onClick={() => onStateChanged(State.Open)}
          >
            Open
          </button>
        </li>
        <li className="nav-item">
          <button 
            type="button"
            className={`btn btn-outline-light ${state === State.Closed ? 'active' : ''}`}
            onClick={() => onStateChanged(State.Closed)}
          >
            Closed
          </button>
        </li>
      </ul>
    </div>
    <div className="bg-dark-01 card-body text-dark">
      {
        isLoading
          ? [1, 2, 3, 4, 5].map((value) => (<IssueSkeleton key={value} />))
          : issues.map((issue) => (<IssueItem key={issue.id} issue={issue} />))
      }                
    </div>
  </div>
)

export default IssueListContainer
