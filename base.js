import * as firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAKzPh-uWm-24zSclbFXZjml-fhr2JmI1A',
  authDomain: 'reparautomobile-ec33f.firebaseapp.com',
  projectId: 'reparautomobile-ec33f',
  storageBucket: 'reparautomobile-ec33f.appspot.com',
  messagingSenderId: '519579588551',
  appId: '1:519579588551:web:9df9018912955efd0c6be2',
};

// eslint-disable-next-line import/prefer-default-export
export const app = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
};
