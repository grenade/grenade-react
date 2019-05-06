import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects'
import {actions, t} from './actions';

// the base URL for your REST API backend
const githubApiBaseUrl = 'https://api.github.com';

// sending request with username and getting user data from GitHub 
function* loadGithubUserEvents(action) {
  const response = yield axios.get(`${githubApiBaseUrl}/users/${action.githubUsername}/events`);
  yield put(actions.loadGithubUserEventsSuccess(response.data))
}

// watches for actions dispatched to the store and starts loadGithubUserEvents saga
export function* watchLoadGithubUserEvents() {
  yield takeLatest(t.LOAD_GITHUB_USER_EVENTS, loadGithubUserEvents)
}