import React, { Component } from 'react';
import { getInitialUsers } from '../actions/shared';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class Login extends Component {

  state = {
    selectedUser: {}
  }

  componentDidMount() {
    this.props.dispatch(getInitialUsers())
  }

  handleSelectUser = e => {
    const selectedUser = this.props.users[e.target.value]
    this.setState(() => ({
      selectedUser
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.selectedUser))
  }

  render() {
    return (
      <div>
        <h1>
          Login
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user-select">Choose a user:</label>
          <select id="user-select" onChange={this.handleSelectUser}>
            <option value="">--Please choose an option--</option>
            {this.props.users && Object.keys(this.props.users).map(user => (
              <option
                key={this.props.users[user].id}
                value={user}
              >
                {this.props.users[user].name}
              </option>
            ))}
          </select>
          <button type='submit'>
            Login
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login);