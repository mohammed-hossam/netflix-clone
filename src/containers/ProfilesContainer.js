import React, { Fragment } from 'react';
import Header from '../components/header';
import Profiles from '../components/profiles';
import logo from '../logo.svg';

function ProfilesContainer({ user, setProfile }) {
  return (
    <Fragment>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to="/" src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => {
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              });
            }}
            data-testid="user-profile"
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </Fragment>
  );
}

export default ProfilesContainer;
