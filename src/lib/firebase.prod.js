import Firebase from 'firebase/app';
import { seedDatabase } from '../seed';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCQDxnGa4QauRxnfw3r_1_S9usRNIskkPs',
  authDomain: 'netflix-64a89.firebaseapp.com',
  projectId: 'netflix-64a89',
  storageBucket: 'netflix-64a89.appspot.com',
  messagingSenderId: '798338877161',
  appId: '1:798338877161:web:f438075effd388a9eb9278',
};

const firebase = Firebase.initializeApp(firebaseConfig);
console.log(firebase);
// seedDatabase(firebase);

export { firebase };
