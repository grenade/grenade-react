import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import GithubTimelineElement from './GithubTimelineElement';
import { actions } from './actions';
import { connect } from 'react-redux'

class EventsTimelineComponent extends React.Component {

  componentWillMount() {
    this.props.loadGithubUserEvents('grenade');
  }

  render () {
    this.timelineEvents = this.props.events.events.map((event, key) => (
      <GithubTimelineElement timelineEvent={event} />
    ));
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
        events: state.events
    };
};

// creating a function called 'loadUserData'
// that dispatches a 'LOAD_USER_DATA' action to the store
// so that saga can trigger and start the API request
const mapDispatchToProps = (dispatch) => {
  return {
    loadGithubUserEvents: githubUsername => dispatch(actions.loadGithubUserEvents(githubUsername))
  };
};

export const EventsTimeline = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsTimelineComponent);
