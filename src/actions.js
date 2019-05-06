export const t = {
  LOAD_GITHUB_USER_EVENTS: 'LOAD_GITHUB_USER_EVENTS',
  LOAD_GITHUB_USER_EVENTS_SUCCESS: 'LOAD_GITHUB_USER_EVENTS_SUCCESS'
};

export const actions = ({
  loadGithubUserEvents: name => ({
    type: t.LOAD_GITHUB_USER_EVENTS, name
  }),
  loadGithubUserEventsSuccess: data => ({
    type: t.LOAD_GITHUB_USER_EVENTS_SUCCESS, data
  })
});