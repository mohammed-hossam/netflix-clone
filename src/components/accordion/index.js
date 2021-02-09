import React, { createContext, useContext, useState } from 'react';
import {
  Body,
  Container,
  Header,
  Inner,
  Item,
  Title,
} from './styles/accordion';

const showContext = createContext();

function Accordion({ children, ...restProps }) {
  return (
    <Container>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [showBody, setShowBody] = useState(false);

  return (
    <showContext.Provider value={{ showBody, setShowBody }}>
      <Item {...restProps}>{children}</Item>;
    </showContext.Provider>
  );
};
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { showBody, setShowBody } = useContext(showContext);
  return (
    <Header
      {...restProps}
      onClick={() => {
        setShowBody((showBody) => {
          return !showBody;
        });
      }}
    >
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { showBody, setShowBody } = useContext(showContext);
  return showBody ? <Body {...restProps}>{children}</Body> : '';
};

export default Accordion;
