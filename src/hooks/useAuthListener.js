import React, { useContext, useEffect, useState } from 'react';
import { firebaseContext } from '../context/firebase';

function useAuthListener() {
  console.log(222222);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const { firebase } = useContext(firebaseContext);

  useEffect(() => {
    const listener = firebase
      .auth()
      .onAuthStateChanged(function handleAuth(user) {
        // console.log(user);
        if (user) {
          // User is signed in.(ana 3yzo ka json fl local storage)
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
        } else {
          // No user is signed in.
          localStorage.removeItem('user');
          setUser(null);
        }
      });

    // return () => listener();
  }, [user]);

  return user;
}

export default useAuthListener;
