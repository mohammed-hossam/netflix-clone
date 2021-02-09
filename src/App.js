import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Browse from './pages/Browse';
import { RedirectAuthedUser, ProtectBrowse } from './helpers/routes';
import useAuthListener from './hooks/useAuthListener';
//my main to sign in (mohammedhossam7777@gmail.com-478963214)
function App() {
  console.log(1111111);
  const user = useAuthListener();
  console.log(user);
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />

      <RedirectAuthedUser user={user} path="/signin" redirectPath="/browse">
        <Signin />
      </RedirectAuthedUser>

      <RedirectAuthedUser user={user} path="/signup" redirectPath="/browse">
        <Signup />
      </RedirectAuthedUser>

      <ProtectBrowse user={user} path="/browse" redirectPath="/signin">
        <Browse />
      </ProtectBrowse>

      {/* <Route path="/browse" component={Browse} /> */}
    </BrowserRouter>
  );
}

export default App;
