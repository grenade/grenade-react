import {t} from './actions';

// starting with no data
const initialState = {
  events: []
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    // tells the store that the events data is successfully retreived
    // and no longer in the process of fetching another one on events request.
    case t.LOAD_GITHUB_USER_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.data
      };

    default:
      return state;
  }
};