import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDThxcclRK3xF1pCVPTuhJ5CmhXaKsq0F8",
    authDomain: "queueme-42acd.firebaseapp.com",
    projectId: "queueme-42acd",
    databaseURL: "https://queueme-42acd-default-rtdb.firebaseio.com",
    storageBucket: "queueme-42acd.appspot.com", 
    messagingSenderId: "975409649052",
    appId: "1:975409649052:web:d5dffe1ff7cf841ad46459",
    measurementId: "G-DGF922X7H1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };