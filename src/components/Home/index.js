// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getMatchesList()
  }
  getMatchesList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    //const {teams} = data
    const newMatchData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(newMatchData)
    this.setState({
      teamsData: newMatchData,
      isLoading: false,
    })
  }
  renderTeams = () => {
    const {teamsData} = this.state
    return (
      <ul className="team-card-container">
        {teamsData.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }
  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            className="logo"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        {isLoading ? this.renderLoader() : this.renderTeams()}
      </div>
    )
  }
}
export default Home
