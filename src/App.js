import React, { Component } from 'react';
import './App.css';
import { EventsTimeline } from './EventsTimeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <EventsTimeline />
        </header>
      </div>
    );
  }
}

export default App;
