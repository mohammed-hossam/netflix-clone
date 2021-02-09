import React, { Fragment, useEffect, useState, useContext } from 'react';
import ProfilesContainer from './ProfilesContainer';
import FooterContainer from './FooterContainer';
import { firebaseContext } from '../context/firebase';
import Header from '../components/header';
import logo from '../logo.svg';
import Card from '../components/card';

function BrowseContainer({ titledData }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('series');
  const [slideRows, setSlideRows] = useState([]);
  console.log(titledData);

  const { firebase } = useContext(firebaseContext);
  const user = firebase.auth().currentUser || {};

  // useEffect(() => {
  //   console.log(profile);
  // }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(titledData[category]);
  }, [titledData, category]);

  console.log(slideRows);

  return profile.displayName ? (
    <Fragment>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to="/" src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((el) => {
          return (
            <Card key={`${category}-${el.title}`}>
              <Card.Title>{el.title}</Card.Title>;
              <Card.Entities>
                {el.data.map((ele) => {
                  // console.log(ele);
                  return (
                    <Card.Item key={ele.id} item={ele}>
                      <Card.Image
                        src={`/images/${category}/${ele.genre}/${ele.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{ele.title}</Card.SubTitle>
                        <Card.Text>{ele.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
              </Card.Entities>
              <Card.Feature category={category} />
            </Card>
          );
        })}
      </Card.Group>

      <FooterContainer />
    </Fragment>
  ) : (
    <ProfilesContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
