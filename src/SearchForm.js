import React from 'react';

/**Displays search form
 * 
 * Props:
 * - setSearchTerm: fn to set state in parent
 * 
 * State:
 * - formData: current form data
 * 
 * App -> StoryList -> {SearchForm, Story}
 */
class SearchForm extends React.Component {
  state = {
    formData: ''
  }

  handleChange = evt => {
    const { value } = evt.target
    this.setState({
      formData: value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setSearchTerm(this.state.formData)
    this.setState({
      formData: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text'
          name='searchTerm'
          value={this.state.formData}
          onChange={this.handleChange} />
        <button> Search </button>
      </form>
    )
  }
}

export default SearchForm;