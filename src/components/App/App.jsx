import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
// import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';
// import Login from '../Auth/Login';
// import Register from '../Auth/Register';
// import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const [loggedIn] = useState(true);
  return (
    <div className='page'>
      <Switch>
      <Route exact path='/'>
          <Main loggedIn={loggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;