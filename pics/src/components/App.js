import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 2d2767d8962b5064f338741a6d554e823e3a75656bb953d58dfbef7bf31ee1ab'
      }
    })
  }
  render () {
    return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={this.onSearchSubmit}/>  
    </div>
    )

  }
}

export default App
