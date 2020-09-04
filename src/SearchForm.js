import React from 'react';

/**Displays search form
 * 
 * Props:
 * - setSearchTerm - fn to set state in parent
 * 
 * State:
 * - formData
 */
class SearchForm extends React.Component {
  state = {
    formData:''
  }

  handleChange(evt) {
    const {value} = evt.target
    this.setState({
      formData: value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.setSearchTerm(this.state.formData)
    this.setState({
      formData: ''
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' 
                name='searchTerm'
                value={this.state.formData}
                onChange={this.handleChange}/>
      </form>
    )
  }
}

export default SearchForm;