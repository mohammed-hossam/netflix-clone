import React, { Fragment, useState, useContext } from 'react';
import { HeaderContainer } from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import Form from '../components/form';
import { firebaseContext } from '../context/firebase';
import { useHistory, withRouter } from 'react-router-dom';

function Signin() {
  const { firebase } = useContext(firebaseContext);
  const history = useHistory();
  console.log(firebase);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  function handleSignin(e) {
    e.preventDefault();

    // fireBase work here
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((user) => {
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
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
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
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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

export default Signin;
