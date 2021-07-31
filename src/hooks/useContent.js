import React, { useContext, useEffect, useState } from 'react';
import { firebaseContext } from '../context/firebase';

function useContent(targetContent) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(firebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(targetContent)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        const allContent = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        setContent(allContent);
        // console.log(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return content;
}

export default useContent;
