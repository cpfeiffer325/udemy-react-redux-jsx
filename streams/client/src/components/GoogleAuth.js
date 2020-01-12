import React from 'react'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '327313692543-fnrjc451a0h536t6lv3ag3a81eo9gjos.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }
  
  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth