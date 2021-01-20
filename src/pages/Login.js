import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        username: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogin(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <nav>
          <h2>Login</h2>
        </nav>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Bank of React</h1>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={this.handleChange} value={this.state.user.username} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login