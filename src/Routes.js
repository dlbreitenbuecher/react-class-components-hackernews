import React from 'react';
import { Route, Redirect } from "react-router-dom";
import StoryList from './StoryList';

function Routes() {
  return (
    <div className='Routes'>
      <Route exact path='/' >
        <StoryList />
      </Route>
    </div>
  )
}