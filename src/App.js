import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes'

/** Renders all app components
 * 
 * App -> StoryList -> {SearchForm, Story}
*/
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
