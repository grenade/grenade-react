import {t} from './actions';

// starting with no data
const initialState = {
  githubEvents: [],
  bugzillaEvents: []
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    // tells the store that the events data is successfully retrieved
    // and no longer in the process of fetching another one on events request.
    case t.LOAD_GITHUB_USER_EVENTS_SUCCESS:
      return {
        ...state,
        githubEvents: action.data
      };
    case t.LOAD_BUGZILLA_USER_EVENTS_SUCCESS:
      return {
        ...state,
        bugzillaEvents: action.data.bugs
      };
    default:
      return state;
  }
};