// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latest-match">
      <h1 className="latest-match-heading">Latest Match</h1>
      <div className="match-details">
        <div className="container1">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="logo"
          alt={`latest match ${competingTeam}`}
        />
        <div className="container2">
          <div className="con">
            <p>First Innings</p>
            <p>{firstInnings}</p>
          </div>
          <div className="con">
            <p>Second Innings</p>
            <p>{secondInnings}</p>
          </div>
          <div className="con">
            <p>Man of the match</p>
            <p>{manOfTheMatch}</p>
          </div>
          <div className="con">
            <p>Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
