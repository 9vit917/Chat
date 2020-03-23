import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Home } from "./pages";

function App() {
  return (
    <div className="wrapper">
      {/* Почему это вложенный Auth route? Лучше просто здесь сразу написать два роута Login и Register
      Не вижу ни одной причины делать вложенным) */}
      {/* registe>r< */}
      <Route exact path={['/', '/login', '/registe']} component={ Auth } />
      <Route exact path="/im" component={ Home } />
    </div>
  );
}

export default App;
