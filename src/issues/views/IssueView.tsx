import { Link, Navigate, useParams } from 'react-router-dom'
import { Loading } from '../../shared/components'
import { IssueComment } from '../components/IssueComment'
import { useIssue } from '../hooks'

const IssueView = () => {
  const params = useParams()
  const { id = '0' } = params

  const { issueQuery } = useIssue(Number(id))

  if (issueQuery.isLoading) return <Loading />

  if (!issueQuery.data) return <Navigate to="./issues/list" />

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      <IssueComment issue={issueQuery.data} />

      {/* Comentario de otros */}
      {/* <IssueComment body={comment2} /> */}
      {/* <IssueComment body={comment3} /> */}
    </div>
  ) 
}

export default IssueView
