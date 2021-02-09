import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function RedirectAuthedUser({
  children,
  user,
  redirectPath,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: redirectPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

export function ProtectBrowse({ children, user, redirectPath, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: redirectPath,
                state: { from: props.location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

// state: { from: props.location }
