import React from 'react'
import ReactDOM from 'react-dom'
import useLocation from './useLocation'

import SeasonDisplay from './SeasonDisplay'
import Loading from './Loading'

const App = () => {
  const [lat, errorMessage] = useLocation()

  let content
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Loading message="Please accept location request"/>
  }

  return <div className="boarder red">{content}</div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
