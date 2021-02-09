import React from 'react';
import Jumbotron from '../components/jumbotron';
import jumbodata from '../fixtures/jumbo.json';

function JumbotronContainer() {
  return (
    <Jumbotron.container>
      {jumbodata.map((item) => {
        return (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.pane>
              <Jumbotron.title>{item.title}</Jumbotron.title>
              <Jumbotron.subTitle>{item.subTitle}</Jumbotron.subTitle>
            </Jumbotron.pane>

            <Jumbotron.pane>
              <Jumbotron.image src={item.image} alt={item.alt} />
            </Jumbotron.pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.container>
  );
}

export default JumbotronContainer;
