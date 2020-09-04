import React from 'react';
import { Route } from "react-router-dom";
import StoryList from './StoryList';

/** Renders routes
 * 
 * App -> StoryList -> {SearchForm, Story}
 */
class Routes extends React.Component {
  render() {
    return (
      <div className='Routes'>
        <Route path='/' >
          <StoryList />
        </Route>
      </div>
    )
  }
}

export default Routes