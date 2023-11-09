import React from 'react'
import './index.css'

class App extends React.Component {
  render() {
    const {
      repoName,
      repoDescription,
      numberOfStars,
      numberOfIssues,
      ownerUsername,
      ownerAvatar,
      date,
    } = this.props
    return (
      <div className="container">
        <div className="img">
          <img src={ownerAvatar} alt={ownerUsername} />
        </div>

        <div className="repository_name">
          <h1>{repoName}</h1>
        </div>

        <div className="repository_description">
          <h4>{repoDescription}</h4>
        </div>

        <div className="stars">
          <h3>Stars: {numberOfStars}</h3>
        </div>

        <div className="issues">
          <h3>Issues: {numberOfIssues}</h3>
        </div>

        <div className="last_pushed">
          <h3>
            Last Pushed (relative to {date}) by {ownerUsername}
          </h3>
        </div>
      </div>
    )
  }
}

export default App
