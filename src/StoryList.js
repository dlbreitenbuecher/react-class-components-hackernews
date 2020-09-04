import React from 'react';
import SearchForm from './SearchForm';

/**Displays search form and stories
 * 
 * Props: 
 * -None
 * 
 * State:
 * - searchTerm: ''
 * -storyList: [{title, link},...]
 * 
 * App -> StoryList -> {SearchForm, Story}
 */
class StoryList extends React.Component {
  state = {
    searchTerm: '',
    storyList: []
  }

  setSearchTerm = (formData) => {
    this.setState({ searchTerm: formData })
  }

  render() {
    return (
    <div>
      <SearchForm setSearchTerm={this.setSearchTerm}/>
      {/* storyList.map() */}
    </div>
    )
  }
}

export default StoryList;