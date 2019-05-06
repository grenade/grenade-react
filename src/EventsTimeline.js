import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import GithubTimelineElement from './GithubTimelineElement';
import BugzillaTimelineElement from './BugzillaTimelineElement';
import { actions } from './actions';
import { connect } from 'react-redux'

class EventsTimelineComponent extends React.Component {

  componentWillMount() {
    this.timelineEvents = [];
    this.props.loadGithubUserEvents('grenade');
    this.props.loadBugzillaUserEvents('rthijssen');
  }
  render () {
    this.timelineEvents = this.timelineEvents.concat(this.props.githubEvents.map((event, key) => (
      <GithubTimelineElement timelineEvent={event} key={'gh' + key} />
    )));
    this.timelineEvents = this.timelineEvents.concat(this.props.bugzillaEvents.map((event, key) => (
      <BugzillaTimelineElement timelineEvent={event} key={'bz' + key} />
    )));
    /*
    this.timelineEvents.sort(function (a, b) {
      return a.state.date - b.state.date;
    });
    */
    return (
      <VerticalTimeline>
        {this.timelineEvents}
      </VerticalTimeline>
    );
  }
}

// making the most current state of 'user' available as props in the component
const mapStateToProps = (state) => {
  return {
    githubEvents: state.events.githubEvents,
    bugzillaEvents: state.events.bugzillaEvents
  };
};

// creating a function called 'loadUserData'
// that dispatches a 'LOAD_USER_DATA' action to the store
// so that saga can trigger and start the API request
const mapDispatchToProps = (dispatch) => {
  return {
    loadGithubUserEvents: username => dispatch(actions.loadGithubUserEvents(username)),
    loadBugzillaUserEvents: username => dispatch(actions.loadBugzillaUserEvents(username))
  };
};

export const EventsTimeline = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsTimelineComponent);
