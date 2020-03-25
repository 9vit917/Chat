import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Home } from "./pages";

function App() {
  return (
    <div className="wrapper">
      {/* Настроить роуты */}
      <Route exact path={['/', '/login']} component={ Auth } />
      <Route exact path='/registe' component={ Auth } />
      <Route exact path="/im" component={ Home } />
    </div>
  );
}

export default App;
