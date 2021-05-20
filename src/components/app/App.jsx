import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import AnimalCrossingContainer from '../../container/AnimalCrossingContainer';


export default function App() {
  return (
    <Router>
      <NavLink to='/'>Home</NavLink>
      <Switch>
        <Route
          exact
          path='/'
          component={AnimalCrossingContainer}
        />
        <Route
          exact
          path='/details/:id'
        // component={CharacterDetails}
        />
      </Switch>
    </Router>
  )
}