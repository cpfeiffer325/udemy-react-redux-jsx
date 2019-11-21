// Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  )
}

// Take the react component and render on page
ReactDOM.render(<App />, document.querySelector('#root'))
