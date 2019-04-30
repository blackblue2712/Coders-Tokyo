import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordin from './components/Accordin';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Accordin heading="Heading">Children demo</Accordin>
      </div>
    );
  }
}

export default App;
