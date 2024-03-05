import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')

class App extends React.Component {
  state = {
    firstName : ''
  }

  handleOnChange = (e) => {
    let value = e.target.value
    this.setState({firstName : value})
  }

  render(){
    let firstName = this.state.firstName

    return(
      <div>
        <input type='text' onChange={this.handleOnChange}></input>
        <p>{firstName}</p>
      </div>
    )
  }
}


ReactDOM.render(<App />, root)