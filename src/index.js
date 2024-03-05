import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: ''
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {


    return (
      <div className=''>
        <div className='row mt-5 justify-content-center'>
          <h3 className='text-center'>Add Student</h3>
          <div className='col-sm-5 m-2 border shadow p-3 rounded'>
            <form onSubmit={this.handleOnSubmit}>
              <input className='form-control mt-3' placeholder='Firstname' type='text' name='firstName' onChange={this.handleOnChange} key='firstname'></input>
              <input className='form-control mt-3' placeholder='LastName' type='text' name='lastName' onChange={this.handleOnChange} key='firstname'></input>
              <input className='form-control mt-3' placeholder='Country' type='text' name='country' onChange={this.handleOnChange} key='firstname'></input>
              <input className='form-control mt-3' placeholder='Title' type='text' name='title' onChange={this.handleOnChange} key='firstname'></input>
              <button type='submit' className='btn btn-primary mt-3'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, root)