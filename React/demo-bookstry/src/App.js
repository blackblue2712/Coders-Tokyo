import React, { Component } from 'react';
import './App.css';
import WeeklySongListItem from './components/WeeklySongListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeeklySongListItem 
          order="01"
          singer="Tiên Tiên, Touliver"
          title="Em không thể"
          viewCount={3000}
        />
      </div>
    );
  }
}

export default App;
