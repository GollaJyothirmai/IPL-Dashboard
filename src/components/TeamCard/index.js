// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="team-list">
      <Link className="team" to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="image" />
        <p className="name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
