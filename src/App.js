import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './Shop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Batch 6 Shop</h1>
        </header>
        <Shop/>
      </div>
    );
  }
}

export default App;
