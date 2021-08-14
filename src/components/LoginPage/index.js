import {Component} from 'react'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {username} = this.state
    const {history} = this.props
    history.replace('/student')
    localStorage.setItem('name', JSON.stringify(username))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <>
        <div className="credentials-section">
          <div className="credentials-container">
            <p className="username">User1 Username: Rahul</p>
            <p className="password">Password: Rahul@123</p>
          </div>
          <hr className="separator" />
          <div className="credentials-container">
            <p className="username">User2 Username: Ajit</p>
            <p className="password">Password: Ajit@123</p>
          </div>
          <hr className="separator" />
          <div className="credentials-container">
            <p className="username">Alumni Username: Sujeet</p>
            <p className="password">Password: Sujeet@123</p>
          </div>
        </div>
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default LoginPage
