import React from 'react'
import UserCreate from './UserCreate'

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div>
        <div className="ui container">
          Select a language:
          <i onClick={() => this.onLanguageChange('english')}  className="flag us" />
          <i onClick={() => this.onLanguageChange('dutch')}  className="flag nl" />
          <i onClick={() => this.onLanguageChange('german')}  className="flag de" />
          <i onClick={() => this.onLanguageChange('english')}  className="flag ca" />
        </div>
        <UserCreate />
      </div>
    )
  }
}

export default App
