import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sum, debounce } from 'lodash';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1 + 2 = {sum([1, 2])}
          <p>backend env is {process.env.REACT_APP_BACKEND}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
