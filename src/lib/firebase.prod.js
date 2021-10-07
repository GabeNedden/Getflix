import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAGh7PYUJ7CDweyqnldMK-Y4d7JyTZZFQ",
    authDomain: "getflix-2021.firebaseapp.com",
    projectId: "getflix-2021",
    storageBucket: "getflix-2021.appspot.com",
    messagingSenderId: "13563051199",
    appId: "1:13563051199:web:017ef9a9713f156dc4da0a",
    measurementId: "G-971BZ8WM24"
  };

const firebase = Firebase.initializeApp(config)

export { firebase };