import { _getUsers } from '../utils/_DATA';
import { receiveUsers } from './users';

export function getInitialUsers() {
  return dispatch => {
    return _getUsers().then(users => {
      dispatch(receiveUsers(users));
    });
  };
}