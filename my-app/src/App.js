import React, { Component } from 'react';
import logo from './Ninja.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <title>Huy Pham first react app!!!</title>
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
           Hello, my name is Huy Pham and this is my first react app please let me know if it did it correctly, Thanks!!
          </p>
          <a
            className="App-link"
            href="https://devmountain.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            I Learn Coding At
          </a>
        </header>
      </div>
    
    );
  }
}

export default App;
