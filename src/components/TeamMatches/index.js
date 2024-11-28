// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const teamMatchesUrl = 'https://apis.ccbp.in/ipl/'
class TeamMatches extends Component {
  state = {
    matchesData: {},
    isLoading: true,
  }
  componentDidMount() {
    this.getMatches()
  }
  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })
  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesUrl}${id}`)
    const fetchData = await response.json()
    const newData = {
      teamBannerUrl: fetchData.team_banner_url,
      latestMatchDetails: this.getFormattedData(fetchData.latest_match_details),
      recentMatches: fetchData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({
      matchesData: newData,
      isLoading: false,
    })
  }
  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )
  renderRecentMatches = () => {
    const {matchesData} = this.state
    const {recentMatches} = matchesData
    return (
      <ul className="recent-match-container">
        {recentMatches.map(eachCard => (
          <MatchCard recentMatchesDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
    )
  }
  renderTeamMatches = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesData
    return (
      <div className="team-matches-inner-container">
        <img src={teamBannerUrl} className="banner-image" alt="team banner" />

        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.renderRecentMatches()}
      </div>
    )
  }
  getClassNames = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'CSK':
        return 'csk'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      case 'KXP':
        return 'kxp'
      case 'KKR':
        return 'kkr'
      case 'RR':
        return 'rr'
    }
  }
  render() {
    const {isLoading} = this.state

    const teamClassName = `team-match-container ${this.getClassNames()}`
    return (
      <div className={teamClassName}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
