import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')

const options = [
  {
    value: '',
    label: '-- Select Country --'
  },
  {
    value: 'ethiopia',
    label: 'Ethiopia'
  },
  {
    value: 'usa',
    label: 'USA'
  },
  {
    value: 'canada',
    label: 'Canada'
  },
  {
    value: 'kenya',
    label: 'Kenya'
  },
  {
    value: 'south africa',
    label: 'South Africa'
  }
]

const countrySelectOption = options.map((item) => <option value={item.value}>{item.label}</option>)



class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
    gender: '',
    skills: {
      html: false,
      js: false,
      css: false
    }
  }

  handleOnChange = (e) => {
    const { name, value, type, checked } = e.target
    if(type === 'checkbox'){
      this.setState({skills : {...this.state.skills, [name] : checked}})
    }else{
      this.setState({ [name]: value })
    }
    
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
              <input className='form-control mt-3' placeholder='Firstname' type='text' name='firstName' onChange={this.handleOnChange} key='firstname' />
              <input className='form-control mt-3' placeholder='LastName' type='text' name='lastName' onChange={this.handleOnChange} key='lastname' />
              <select onChange={this.handleOnChange} className='form-select mt-3' name="country">
                {countrySelectOption}
              </select>
              <p>Gender</p>
              <div>
                Male <input onChange={this.handleOnChange} value='male' type='radio' name='gender' />
              </div>
              <div>
                Female <input onChange={this.handleOnChange} value='female' type='radio' name='gender' />
              </div>

              <div className='mt-2'>
                <h3>Select Your skills</h3>
                <div>HTML: <input type='checkbox' onChange={this.handleOnChange} value='html' name='html' /> CSS: <input type='checkbox' onChange={this.handleOnChange} value='css' name='css' /> JavaScript <input type='checkbox' onChange={this.handleOnChange} value='js' name='js' /> </div>
              </div>

              <input className='form-control mt-3' placeholder='Title' type='text' name='title' onChange={this.handleOnChange} key='title'></input>
              <button type='submit' className='btn btn-primary mt-3'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, root)