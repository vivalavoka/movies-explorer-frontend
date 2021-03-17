import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const content = props.loggedIn ? props.children : <Redirect to="/signin" />
  return (
    <Route>
      {content}
    </Route>
  );
}
