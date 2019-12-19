import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }
  onInputChange = event => {
    event.preventDefault()

    // TODO: Make sure we make a callback to the parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
