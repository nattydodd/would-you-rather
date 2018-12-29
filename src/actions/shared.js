import { _getUsers, _getQuestions } from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function getInitialUsers() {
  return dispatch => {
    return _getUsers().then(users => {
      dispatch(receiveUsers(users));
    });
  };
}

export function getQuestions() {
  return dispatch => {
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
    });
  }
}