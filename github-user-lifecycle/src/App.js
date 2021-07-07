import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class App extends React.Component {

  state = {
    user:null
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/dominthebox')
      .then(res => {
        console.log(res.data)
        this.setState({
          user:res.data
        })
      })
      .catch(err => {
        console.log('Houston, we have a problem:', err)
      })
  }

  render() {
    return(
      <div className="App">
        <h1>Hey are you out there?</h1>
        <UserCard userDate={this.state.userDate}/>
      </div>
    )
  }
}

export default App