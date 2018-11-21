import React, { Component } from 'react';
import logo from './logo.svg';
import * as Button from './_/atom/Button/Button';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button
            label={'Test'}
          />
          <Button
            label={'Test 2'}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <p>{ process.env.REACT_APP_ENVIRONMENT } </p>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
