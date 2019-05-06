export const t = {
  LOAD_GITHUB_USER_EVENTS: 'LOAD_GITHUB_USER_EVENTS',
  LOAD_GITHUB_USER_EVENTS_SUCCESS: 'LOAD_GITHUB_USER_EVENTS_SUCCESS',

  LOAD_BUGZILLA_USER_EVENTS: 'LOAD_BUGZILLA_USER_EVENTS',
  LOAD_BUGZILLA_USER_EVENTS_SUCCESS: 'LOAD_BUGZILLA_USER_EVENTS_SUCCESS'
};

export const actions = ({
  loadGithubUserEvents: username => ({
    type: t.LOAD_GITHUB_USER_EVENTS, username
  }),
  loadGithubUserEventsSuccess: data => ({
    type: t.LOAD_GITHUB_USER_EVENTS_SUCCESS, data
  }),
  loadBugzillaUserEvents: username => ({
    type: t.LOAD_BUGZILLA_USER_EVENTS, username
  }),
  loadBugzillaUserEventsSuccess: data => ({
    type: t.LOAD_BUGZILLA_USER_EVENTS_SUCCESS, data
  })
});