import React, { Fragment } from 'react';
import Feature from '../components/feature/index';
import OptForm from '../components/opt-form/index';
import AccordionContainer from '../containers/AccordionContainer';
import FooterContainer from '../containers/FooterContainer';
import { HeaderContainer } from '../containers/HeaderContainer';
import JumbotronContainer from '../containers/JumbotronContainer';

function Home() {
  return (
    <Fragment>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FooterContainer />
      <AccordionContainer />
      <FooterContainer />
    </Fragment>
  );
}

export default Home;
