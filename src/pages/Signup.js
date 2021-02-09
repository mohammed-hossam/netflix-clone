import React, { Fragment, useState, useContext } from 'react';
import { HeaderContainer } from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import Form from '../components/form';
import { firebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';

function Signup() {
  const { firebase } = useContext(firebaseContext);
  const history = useHistory();
  console.log(firebase);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  function handleSignup(e) {
    e.preventDefault();

    // fireBase work here
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        console.log(result);
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5 + 1),
        });
      })
      .then(() => {
        history.push('/browse');
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  }

  return (
    <Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />;
    </Fragment>
  );
}

export default Signup;
