import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBK053Fe0sxKIisfPDpVlzErXXHKymjHg8',
  authDomain: 'fir-react-auth-ae9cb.firebaseapp.com',
  projectId: 'fir-react-auth-ae9cb',
  storageBucket: 'fir-react-auth-ae9cb.appspot.com',
  messagingSenderId: '938584010910',
  appId: '1:938584010910:web:5b1ddc701187705c7b4b8f'
});

export default firebaseConfig;
