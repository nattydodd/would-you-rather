import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authedUser';
import { NavLink } from 'react-router-dom';
import styles from './styles/Nav.module.scss';
import { withRouter } from 'react-router-dom';

class Nav extends Component {

  logout = e => {
    e.preventDefault()

    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <ul className={styles.nav}>
        <li className={styles['nav-item']}>
          <NavLink
            to='/'
            exact
            activeClassName={styles.active}
            className={styles.link}
          >
            Home
          </NavLink>
        </li>
        <li className={styles['nav-item']}>
          <NavLink
            to='/leaderboard'
            exact
            activeClassName={styles.active}
            className={styles.link}
          >
            LeaderBoard
          </NavLink>
        </li>
        <li className={styles['nav-item']}>
          <NavLink
            to='/add'
            exact
            activeClassName={styles.active}
            className={styles.link}
          >
            New Poll
          </NavLink>
        </li>
        {this.props.authedUser && (
          <li className={styles['nav-item']}>
            <button
              onClick={this.logout}
              className={styles.link}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(Nav));