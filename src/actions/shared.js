import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading'

export function getUsers() {
  return dispatch => {
    dispatch(showLoading())
    return _getUsers().then(users => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading())
    });
  };
}

export function getQuestions() {
  return dispatch => {
    dispatch(showLoading())
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading())
    });
  }
}

export function saveQuestionAnswer(answer) {
  return dispatch => {
    dispatch(showLoading())
    return _saveQuestionAnswer(answer).then(() => {
      dispatch(getQuestions());
      dispatch(getUsers());
      dispatch(hideLoading())
    });
  }
}

export function saveQuestion(question) {
  return dispatch => {
    dispatch(showLoading())
    return _saveQuestion(question).then(() => {
      dispatch(getQuestions());
      dispatch(getUsers());
      dispatch(hideLoading())
    });
  }
}