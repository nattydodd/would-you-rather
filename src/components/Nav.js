import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authedUser';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  logout = e => {
    e.preventDefault()

    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              LeaderBoard
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Poll
            </NavLink>
          </li>
          {this.props.authedUser && (
            <li>
              <a href='#' onClick={this.logout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav);