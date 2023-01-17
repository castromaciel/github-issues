/* eslint-disable jsx-a11y/anchor-is-valid */
import { IssueItem } from './IssueItem'

export const IssueList = () => (
  <div className="card border-white">
    <div className="card-header bg-dark">
      <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
          <a className="nav-link active">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Open</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Closed</a>
        </li>
      </ul>
    </div>
    <div className="card-body text-dark">
      { [1, 2, 3, 4].map((issue) => (<IssueItem key={issue} />)) }                
    </div>
  </div>
)
