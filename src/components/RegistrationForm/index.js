import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    error: '',
    error1: '',
    color: '',
    submit: true,
    // isClicked: true,
  }

  clickToChangeName = event => {
    if (event.target.value === '') {
      this.setState({error: 'Required'})
    } else {
      this.setState({error: ''})
    }
    this.setState({username: event.target.value})
  }

  clickToChangePassword = event => {
    if (event.target.value === '') {
      this.setState({error1: 'Required'})
    } else {
      this.setState({error1: ''})
    }
    this.setState({password: event.target.value})
  }

  clickToSubmit = event => {
    event.preventDefault()
    const {username, password} = this.state
    console.log(username, password)
    if (username === '') {
      this.setState({error: 'Required', color: 'red'})
    }
    if (password === '') {
      this.setState({error1: 'Required'})
    } else {
      this.setState({submit: false})
    }
  }

  formSnipit = () => {
    const {error, error1, color} = this.state
    return (
      <>
        <form className="form">
          <h1 className="head">Registration</h1>
          <div className="container">
            <div className="user-pass">
              <label htmlFor="userName">FIRST NAME</label>
              <input
                className={color}
                type="text"
                name="userName"
                placeholder="First name"
                onBlur={this.clickToChangeName}
              />
              <p>{error}</p>
            </div>
            <div className="user-pass">
              <label htmlFor="password">LAST NAME</label>
              <input
                className={color}
                type="password"
                name="password"
                placeholder="Last name"
                onBlur={this.clickToChangePassword}
              />
              <p>{error1}</p>
            </div>
          </div>
          <div className="button">
            <button
              type="submit"
              className="button1"
              onClick={this.clickToSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }

  render() {
    const {submit} = this.state
    return (
      <>
        <div>
          {submit ? (
            this.formSnipit()
          ) : (
            <div className="div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success"
              />
              <p>Submitted Successfully</p>
              <button
                type="button"
                className="button1"
                onClick={this.backToHome}
              >
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </>
    )
  }
}
export default RegistrationForm
