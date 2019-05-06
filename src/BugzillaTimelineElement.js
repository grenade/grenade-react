import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'react-bootstrap/Image'

class BugzillaTimelineElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.timelineEvent.id,
      className: 'push',
      date: this.props.timelineEvent.last_change_time,
      //url: 'https://bugzilla.com/' + this.props.timelineEvent.repo.name + '/commit/' + this.props.timelineEvent.payload.commits[0].sha.substring(0, 7),
      iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-bugzilla.png',
      iconHeight: '60px',
      iconWidth: '60px',
      title: this.props.timelineEvent.summary,
      /*subtitle: {
        prefix: this.props.timelineEvent.repo.name + '/' + this.props.timelineEvent.payload.ref,
        link: null,
        suffix: ''
      },*/
      commits: []
    };
  }
  render() {
    return (
      <VerticalTimelineElement
        className={this.state.className}
        key={this.state.id}
        date={ new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' }).format(new Date(this.state.date)) }
        icon={<Image src={this.state.iconUrl} style={{width: this.state.iconWidth, height: this.state.iconHeight}} fluid roundedCircle />} >
        <h3 className={'vertical-timeline-element-title ' + this.state.className}>
          {this.state.title}
        </h3>
        <h4 className={'vertical-timeline-element-subtitle ' + this.state.className}>
        </h4>
        <p>
          {this.state.body}
        </p>
        <ul>
          {
            this.state.commits.map((commit, key) =>
              <li key={key}>
                <a href={commit.url.replace('api.bugzilla.com/repos', 'bugzilla.com').replace('/commits/', '/commit/')}>
                  {commit.sha.substring(0, 7)}
                </a> {commit.message}
              </li>
            )
          }
        </ul>
      </VerticalTimelineElement>
    )
  }
}

export default BugzillaTimelineElement;
