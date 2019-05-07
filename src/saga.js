import axios from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects'
import {actions, t} from './actions';

const githubApiBaseUrl = 'https://api.github.com';
const bugzillaApiBaseUrl = 'https://bugzilla.mozilla.org/rest';

function* loadGithubUserEvents(action) {
  const response = yield axios.get(`${githubApiBaseUrl}/users/${action.username}/events`);
  yield put(actions.loadGithubUserEventsSuccess(response.data))
}

function* loadBugzillaUserEvents(action) {
  const response = yield axios.get(`${bugzillaApiBaseUrl}/bug?assigned_to=${action.username}`);
  yield put(actions.loadBugzillaUserEventsSuccess(response.data))
}

export function *watchAll() {
  yield all([
    takeLatest(t.LOAD_GITHUB_USER_EVENTS, loadGithubUserEvents),
    takeLatest(t.LOAD_BUGZILLA_USER_EVENTS, loadBugzillaUserEvents)
  ]);
}