import React from 'react';
import contentFilter from '../helpers/contentFilter';
import useContent from '../hooks/useContent';
import BrowseContainer from '../containers/BrowseContainer';

function Browse() {
  // hena 3yzen ngeb el data
  const films = useContent('films');
  const series = useContent('series');

  //3shan n2smhom 3ala 2sass el titles zy ma m3mol fl design
  const titledData = contentFilter(series, films);
  console.log(titledData);
  return <BrowseContainer titledData={titledData} />;
}

export default Browse;
