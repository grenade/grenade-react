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
          className: 'blue',
          date: this.props.timelineEvent.created_at,
          url: this.props.timelineEvent.payload.pull_request.html_url,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'pull request',
          subtitle: {
            prefix: this.props.timelineEvent.payload.action,
            link: {
              text: this.props.timelineEvent.payload.pull_request.html_url.replace('https://github.com/', ''),
              url: this.props.timelineEvent.payload.pull_request.html_url
            },
            suffix: ''
          },
          body: this.props.timelineEvent.payload.pull_request.title,
          commits: []
        };
        break;
      case 'PullRequestReviewCommentEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'blue',
          date: this.props.timelineEvent.created_at,
          url: this.props.timelineEvent.payload.comment.html_url,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'pull request review comment',
          subtitle: {
            prefix: this.props.timelineEvent.payload.action,
            link: {
              text: this.props.timelineEvent.payload.comment.html_url.replace('https://github.com/', ''),
              url: this.props.timelineEvent.payload.comment.html_url
            },
            suffix: ''
          },
          commits: []
        };
        break;
      case 'CreateEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'blue',
          date: this.props.timelineEvent.created_at,
          url: 'https://github.com/' + this.props.timelineEvent.repo.name + '/tree/' + this.props.timelineEvent.payload.ref,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: this.props.timelineEvent.payload.ref_type + ' created',
          subtitle: {
            prefix: '',
            link: {
              text: (this.props.timelineEvent.payload.ref === null) ? this.props.timelineEvent.repo.name : this.props.timelineEvent.repo.name + '/' + this.props.timelineEvent.payload.ref,
              url: (this.props.timelineEvent.payload.ref === null) ? 'https://github.com/' + this.props.timelineEvent.repo.name : 'https://github.com/' + this.props.timelineEvent.repo.name + '/tree/' + this.props.timelineEvent.payload.ref
            },
            suffix: ''
          },
          commits: []
        };
        break;
      case 'DeleteEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'red opaque',
          date: this.props.timelineEvent.created_at,
          url: 'https://github.com/' + this.props.timelineEvent.repo.name + '/tree/' + this.props.timelineEvent.payload.ref,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'delete',
          subtitle: {
            prefix: this.props.timelineEvent.repo.name + '/' + this.props.timelineEvent.payload.ref,
            link: null,
            suffix: ''
          },
          commits: this.props.timelineEvent.payload.commits || []
        };
        break;
      case 'PushEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'green',
          date: this.props.timelineEvent.created_at,
          url: 'https://github.com/' + this.props.timelineEvent.repo.name + '/commit/' + this.props.timelineEvent.payload.commits[0].sha.substring(0, 7),
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'push',
          subtitle: {
            prefix: this.props.timelineEvent.payload.commits.length + ' commit' + ((this.props.timelineEvent.payload.commits.length > 1) ? 's' : '') + ' pushed to',
            link: {
              text: this.props.timelineEvent.repo.name + '/' + this.props.timelineEvent.payload.ref.replace('refs/heads/', ''),
              url: 'https://github.com/' + this.props.timelineEvent.repo.name + '/commits/' + this.props.timelineEvent.payload.ref.replace('refs/heads/', '')
            },
            suffix: null
          },
          commits: this.props.timelineEvent.payload.commits
        };
        break;
      case 'ForkEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'blue',
          date: this.props.timelineEvent.created_at,
          url: 'https://github.com/' + this.props.timelineEvent.payload.forkee.full_name,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'Fork',
          subtitle: {
            prefix: this.props.timelineEvent.repo.name + ', to: ' + this.props.timelineEvent.payload.forkee.full_name,
            link: null,
            suffix: ''
          },
          commits: this.props.timelineEvent.payload.commits || []
        };
        break;
      case 'IssueCommentEvent':
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'blue',
          date: this.props.timelineEvent.created_at,
          url: this.props.timelineEvent.payload.comment.html_url,
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: 'issue comment',
          subtitle: {
            prefix: this.props.timelineEvent.payload.action,
            link: {
              text: this.props.timelineEvent.payload.comment.html_url.replace('https://github.com/', ''),
              url: this.props.timelineEvent.payload.comment.html_url
            },
            suffix: ''
          },
          commits: []
        };
        break;
      default:
        this.state = {
          id: this.props.timelineEvent.id,
          className: 'red',
          date: this.props.timelineEvent.created_at,
          //url: 'https://github.com/' + this.props.timelineEvent.repo.name + '/commit/' + this.props.timelineEvent.payload.commits[0].sha.substring(0, 7),
          iconUrl: 'https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png',
          iconHeight: '60px',
          iconWidth: '60px',
          title: this.props.timelineEvent.type,
          subtitle: {
            prefix: this.props.timelineEvent.repo.name + '/' + this.props.timelineEvent.payload.ref,
            link: null,
            suffix: ''
          },
          commits: []
        };
        break;
    }
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
