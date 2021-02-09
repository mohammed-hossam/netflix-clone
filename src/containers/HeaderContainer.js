import React from 'react';
import Header from '../components/header/index';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to="/" src={logo} alt="Netflix" />
        <Header.ButtonLink to="/signin">Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
