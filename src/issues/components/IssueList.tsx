/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { Issue, State } from '../interfaces'
import { IssueItem } from './IssueItem'

interface Props {
  issues: Issue[]
  state?: State
  
  onStateChanged: (state?: State) => void
}

export const IssueList: FC<Props> = ({
  issues, onStateChanged, state
}) => (
  <div className="card border-white">
    <div className="card-header bg-dark">
      <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${!state ? 'active' : ''}`}
            onClick={() => onStateChanged()}
          >
            All

          </button>
        </li>
        <li className="nav-item">
          <button 
            type="button"
            className={`nav-link ${state === State.Open ? 'active' : ''}`}
            onClick={() => onStateChanged(State.Open)}
          >
            Open

          </button>
        </li>
        <li className="nav-item">
          <button 
            type="button"
            className={`nav-link ${state === State.Closed ? 'active' : ''}`}
            onClick={() => onStateChanged(State.Closed)}
          >
            Closed

          </button>
        </li>
      </ul>
    </div>
    <div className="card-body text-dark">
      { issues.map((issue) => (<IssueItem key={issue.id} issue={issue} />)) }                
    </div>
  </div>
)
