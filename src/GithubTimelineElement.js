import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'react-bootstrap/Image'

class GithubTimelineElement extends React.Component {
  constructor(props) {
    super(props);
    switch (this.props.timelineEvent.type) {
      case 'PullRequestEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'pull-request',
          date: this.props.timelineEvent.created_at,
          url: this.props.timelineEvent.payload.pull_request.html_url,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/Octocat.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'Pull Request',
          subtitle: this.props.timelineEvent.payload.number + ' to: ' + this.props.timelineEvent.repo.name,
          commits: this.props.timelineEvent.payload.commits || []
        }
        break;
      case 'CreateEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'branch',
          date: this.props.timelineEvent.created_at,
          url: 'https://github.com/' + this.props.timelineEvent.repo.name + '/tree/' + this.props.timelineEvent.payload.ref,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/Octocat.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: this.props.timelineEvent.payload.ref_type + ' created',
          subtitle: this.props.timelineEvent.repo.name + '/' + this.props.timelineEvent.payload.ref,
          commits: this.props.timelineEvent.payload.commits || []
        }
        break;
      case 'DeleteEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'delete',
          date: this.props.timelineEvent.created_at,
          url: 'https://github.com/' + this.props.timelineEvent.repo.name + '/tree/' + this.props.timelineEvent.payload.ref,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/Octocat.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'Delete',
          subtitle: this.props.timelineEvent.repo.name + '/' + this.props.timelineEvent.payload.ref,
          commits: this.props.timelineEvent.payload.commits || []
        }
        break;
      case 'PushEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'push',
          date: this.props.timelineEvent.created_at,
          url: 'https://github.com/' + this.props.timelineEvent.repo.name + '/commit/' + this.props.timelineEvent.payload.commits[0].sha.substring(0, 7),
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/Octocat.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'Push',
          subtitle: this.props.timelineEvent.repo.name + '/' + this.props.timelineEvent.payload.ref,
          commits: this.props.timelineEvent.payload.commits || []
        }
        break;
      case 'ForkEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'fork',
          date: this.props.timelineEvent.created_at,
          url: 'https://github.com/' + this.props.timelineEvent.payload.forkee.full_name,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/Octocat.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'Fork',
          subtitle: this.props.timelineEvent.repo.name + ', to: ' + this.props.timelineEvent.payload.forkee.full_name,
          commits: this.props.timelineEvent.payload.commits || []
        }
        break;
      default:
        this.state = {
          id: this.props.timelineEvent.id,
          className: '',
          date: 'unknown',
          url: '',
          iconUrl: '',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'lorem ipsum',
          subtitle: 'dolor sit amet',
          commits: []
        }
        break;
    }
  }
  render() {
    return (
      <VerticalTimelineElement
        className={this.state.className}
        key={this.state.id}
        date={this.state.date}
        icon={<Image src={this.state.iconUrl} style={{width: this.state.iconWidth, height: this.state.iconHeight}} fluid roundedCircle />} >
        <h3 className={'vertical-timeline-element-title ' + this.state.className}>
          {this.state.title}
        </h3>
        <h4 className={'vertical-timeline-element-subtitle ' + this.state.className}>
          {this.state.subtitle}
        </h4>
        <ul>
          {
            this.state.commits.map((commit, key) =>
              <li key={key}>
                <a href={commit.url.replace('api.github.com/repos', 'github.com').replace('/commits/', '/commit/')}>
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

export default GithubTimelineElement;
