import React from 'react';
import { Route } from 'react-router';
import './App.css';
import { Login, LoginContainer } from './components/Login';
import { Main, MainContainer } from './components/Main';

function App() {
  return (
    <div className='App'>
      <Route
        path='/'
        render={() => <LoginContainer />}
      />
      <Route
        path='/main'
        render={() => <MainContainer />}
      />
    </div>
  );
}

export default App;
