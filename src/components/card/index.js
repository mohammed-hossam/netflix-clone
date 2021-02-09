import React, { createContext, useContext, useState } from 'react';
import {
  Content,
  Title,
  Group,
  SubTitle,
  Text,
  Container,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Meta,
  Item,
  Entities,
  Image,
  Maturity,
} from './styles/card';

export const FeatureContext = createContext(null);

function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, itemFeature, setShowFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>;
    </FeatureContext.Provider>
  );
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};
Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};
Card.Item = function CardItem({ children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      {...restProps}
      onClick={() => {
        console.log(restProps.item);
        setShowFeature(true);
        setItemFeature(restProps.item);
      }}
    >
      {children}
    </Item>
  );
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );
  console.log(itemFeature);
  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold"></FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};

export default Card;
