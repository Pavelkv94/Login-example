import React from 'react';
import { Route } from 'react-router';
import './App.css';
import { Login } from './components/Login';
import { Main } from './components/Main';

function App() {
  return (
          <div className='App'>
        <Route
          path='/login'
          render={() => <Login />}
        />
        <Route
          path='/main'
          render={() => <Main />}
        />
      </div>
      );
}

export default App;
