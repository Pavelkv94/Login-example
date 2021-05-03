import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { Main } from './components/Main';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
