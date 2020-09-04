import React from 'react';
import SearchForm from './SearchForm';
import Story from './Story'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

/** Displays search form and stories
 * 
 * Props: 
 * - None
 * 
 * State:
 * - searchTerm: ''
 * - storyList: [{title, url},...]
 * 
 * App -> StoryList -> {SearchForm, Story}
 */
class StoryList extends React.Component {
  state = {
    searchTerm: '',
    storyList: []
  }
//TODO: constnat for base URL
//TRY catch stuff
  async componentDidMount(){
    const resp = await axios.get("https://hn.algolia.com/api/v1/search?query=react")
    let parsedHits = resp.data.hits.map(hit=>({title: hit.title, url: hit.url}))
    this.setState({storyList: parsedHits})
  }

  async componentDidUpdate (prevProps, prevState){
    if (prevState.searchTerm !== this.state.searchTerm) {
      const resp = await axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}`)
      let parsedHits = resp.data.hits.map(hit=>({title: hit.title, url: hit.url}))
      //TODO: just use falsy
      parsedHits = parsedHits.filter(hit=>(hit.title !== '' && hit.url !== '' && hit.title !== null && hit.url !== null))

      if (!parsedHits.length){
        parsedHits[0] = {title: 'No search results, visit Reddit instead :(', url: '/'}
      }
      this.setState({storyList: parsedHits})//TODO: isLoading = false here; implement loading
    }
  }
//TODO: delete
  componentWillUnmount(){
    this.setState({storyList: []})
  }

  setSearchTerm = (formData) => {
    this.setState({ searchTerm: formData })
  }

  render() {
    return (
    <div>
      <div>
        <SearchForm setSearchTerm={this.setSearchTerm}/>
        <br />
      </div>
      <ul>
        {this.state.storyList.map(story=>(<Story key={uuid()} url={story.url} title={story.title}/>))}
      </ul>
    </div>
    )//TODO: uuid is applied to different instances of the same thing, not stable; also expensive to call uuid() every time
    //TODO: use a key API gives, or just combine title+url
  }
}

export default StoryList;