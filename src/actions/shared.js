import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function getUsers() {
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

export function saveQuestionAnswer(answer) {
  return dispatch => {
    return _saveQuestionAnswer(answer).then(() => {
      dispatch(getQuestions());
      dispatch(getUsers());
    });
  }
}

export function saveQuestion(question) {
  return dispatch => {
    return _saveQuestion(question).then(() => {
      dispatch(getQuestions());
      dispatch(getUsers());
    });
  }
}