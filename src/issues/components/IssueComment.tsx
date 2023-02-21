import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Issue } from '../interfaces'

interface Props {
  issue: Issue
}

export const IssueComment: FC<Props> = ({ issue }) => (
  <div className="col-12">
    <div className="card border-white mt-2">
      <div className="card-header bg-dark-01">
        <img src={issue.user.avatar_url} alt="User Avatar" className="avatar" />
        <span className="mx-2">{issue.user.login} commented</span>
      </div>
      <div className="card-body bg-dark-02 text-grey-01">
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </div>
    </div>
  </div>
)
