/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import { useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { FiCheckCircle, FiInfo, FiMessageSquare } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { timeSince } from '../../helpers'
import { Issue, State } from '../interfaces'
import { getIssueComments, getIssueInfo } from '../services'

interface Props {
  issue: Issue
}

export const IssueItem: FC<Props> = ({
  issue
}) => {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const prefetchData = () => {
    queryClient.prefetchQuery(
      ['issue', issue.number],
      () => getIssueInfo(issue.number),
      {
        staleTime: 1000 * 60 * 60
      }
    )
    queryClient.prefetchQuery(
      ['issue', issue.number, '/comments'],
      () => getIssueComments(issue.number),
      {
        staleTime: 1000 * 60 * 60
      }
    )
  }

  const presetData = () => {
    queryClient.setQueryData(
      ['issue', issue.number],
      issue,
      {
        updatedAt: new Date().getTime() + 10000
      }
    )
  }

  return (
    <div
      className="bg-dark-02 card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
      onMouseEnter={presetData}
    >
      <div className="card-body d-flex align-items-center">
        {
          issue.state === State.Open
            ? <FiInfo size={30} color="red" />
            : <FiCheckCircle size={30} color="green" /> 
        }     

        <div className="d-flex flex-column flex-fill px-2">
          <span className="text-grey-01">{issue.title}</span>
          <span className="issue-subinfo">
            #{issue.number} opened {timeSince(issue.created_at)} by 
            <span className="fw-bold"> {issue.user.login} </span>
            <div>
              {
                issue.labels.map((label) => (
                  <span 
                    key={label.id}
                    className="badge rounded-pill m-1"
                    style={{ backgroundColor: `#${label.color}`, color: 'black' }}
                  >
                    {label.name}
                  </span>
                ))
              }
            </div>
          </span>
        </div>

        <div className="d-flex align-items-center text-grey-01">
          <img src={issue.user.avatar_url} alt="User Avatar" className="avatar" />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>

      </div>
    </div>
  )
}
