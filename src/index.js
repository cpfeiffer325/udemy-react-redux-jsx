// Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Lilybug"/>
      <CommentDetail author="Kennedy"/>
      <CommentDetail author="Evelyn"/>
      <CommentDetail author="Olivia"/>
    </div>
  )
}

// Take the react component and render on page
ReactDOM.render(<App />, document.querySelector('#root'))
