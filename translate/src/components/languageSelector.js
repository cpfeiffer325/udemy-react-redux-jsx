import React from 'react'

class LanguageSelector extends React.Component {
  render() {
    return (
      <div className="ui container">
        Select a language: 
        <i onClick={() => this.props.onLanguageChange('english')}  className="flag ca" />
        <i onClick={() => this.props.onLanguageChange('dutch')}  className="flag nl" />
      </div>
    )
  } 
}

export default LanguageSelector
