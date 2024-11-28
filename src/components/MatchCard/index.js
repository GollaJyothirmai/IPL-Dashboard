// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} =
    recentMatchesDetails
  const statusClassName = status =>
    status === 'Won' ? 'green status' : 'red status'
  const matchStatusClassName = `status ${statusClassName(matchStatus)}`
  return (
    <li>
      <img
        src={competingTeamLogo}
        className="img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
