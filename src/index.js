// Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author="Lilybug" 
          timeAgo="Today at 4:45PM" 
          message="Nice blog post!"
        />
      </ApprovalCard>
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author="Mykatron" 
        timeAgo="Today at 2:15PM" 
        message="Whats for dinner"
      />
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author="Eerol" 
        timeAgo="Today at 5:00PM" 
        message="Weekends are too short"
      />
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author="Nigel" 
        timeAgo="Today at 3:30PM" 
        message="Pizza for dinner"
      />
    </div>
  )
}

// Take the react component and render on page
ReactDOM.render(<App />, document.querySelector('#root'))
