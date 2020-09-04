import React from 'react';

/** Displays a Hackernews story
 * 
 * Props:
 * - url: URL of a Hackernews story
 * - title: its title
 * 
 * App -> StoryList -> {SearchForm, Story}
 */
class Story extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.title}</a>
      </li>
    )
  }
}

export default Story;