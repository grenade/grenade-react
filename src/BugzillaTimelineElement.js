import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'react-bootstrap/Image'

class BugzillaTimelineElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.timelineEvent.id,
      className: (this.props.timelineEvent.status === 'RESOLVED') ? 'gray opaque' : (this.props.timelineEvent.status === 'NEW' || this.props.timelineEvent.status === 'ASSIGNED') ? 'blue' : 'red',
      date: this.props.timelineEvent.last_change_time,
      //url: 'https://bugzilla.com/' + this.props.timelineEvent.repo.name + '/commit/' + this.props.timelineEvent.payload.commits[0].sha.substring(0, 7),
      iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-bugzilla.png',
      iconHeight: '60px',
      iconWidth: '60px',
      title: this.props.timelineEvent.component + ' > ' + this.props.timelineEvent.product,
      subtitle: {
        prefix: '',
        link: {
          text: this.props.timelineEvent.id,
          url: 'https://bugzil.la/' + this.props.timelineEvent.id
        },
        suffix: this.props.timelineEvent.status + ' (' + this.props.timelineEvent.assigned_to + ') - ' + this.props.timelineEvent.summary
      },
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
          {
            (this.state.subtitle.link === null)
              ? (this.state.subtitle.prefix)
              : (<span>{this.state.subtitle.prefix} <a href={this.state.subtitle.link.url}>{this.state.subtitle.link.text}</a> {this.state.subtitle.suffix}</span>)
          }
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
