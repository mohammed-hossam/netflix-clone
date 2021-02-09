import React from 'react';
import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron';

function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.subTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Jumbotron;
