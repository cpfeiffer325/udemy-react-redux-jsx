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
        <div>
          <h4>Warning!</h4>
          Don't forget to bring a towel
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author="Lilybug" 
          timeAgo="Today at 4:45PM" 
          message="You are the best!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author="Mykatron" 
          timeAgo="Today at 2:15PM" 
          message="Whats for dinner"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author="Eerol" 
          timeAgo="Today at 5:00PM" 
          message="Weekends are too short"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.avatar()} 
          author="Nigel" 
          timeAgo="Today at 3:30PM" 
          message="Pizza for dinner"
        />
      </ApprovalCard>
    </div>
  )
}

// Take the react component and render on page
ReactDOM.render(<App />, document.querySelector('#root'))
