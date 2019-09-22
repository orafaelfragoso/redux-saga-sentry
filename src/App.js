import React from 'react';
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.css';

function App({ auth }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Capturando erros com Redux e Redux Saga no Sentry
        </p>
        <p>
          <button type="button" onClick={auth}>Redux Error</button>
        </p>
      </header>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  auth: () => dispatch({ type: 'AUTH' }),
})

export default connect(null, mapDispatchToProps)(App)
