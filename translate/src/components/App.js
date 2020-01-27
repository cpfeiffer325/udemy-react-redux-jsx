import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import languageSelector from './languageSelector'
import LanguageSelector from './languageSelector'

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div>
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App
