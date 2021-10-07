import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyDAGh7PYUJ7CDweyqnldMK-Y4d7JyTZZFQ",
    authDomain: "getflix-2021.firebaseapp.com",
    projectId: "getflix-2021",
    storageBucket: "getflix-2021.appspot.com",
    messagingSenderId: "13563051199",
    appId: "1:13563051199:web:017ef9a9713f156dc4da0a",
    measurementId: "G-971BZ8WM24"
  };

  const firebase = window.firebase.initializeApp(config);

  ReactDOM.render(
      <>
          <FirebaseContext.Provider value={{ firebase: window.firebase }}>
              <GlobalStyles />
              <App />
          </FirebaseContext.Provider>
      </>, 
      document.getElementById('root')
  );
