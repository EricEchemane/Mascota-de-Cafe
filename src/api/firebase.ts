import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAC9Xyg9S-DO9e4-WVk-4KEI1znKhwnXqc",
    authDomain: "my-app-4d82e.firebaseapp.com",
    databaseURL: "https://my-app-4d82e-default-rtdb.firebaseio.com",
    projectId: "my-app-4d82e",
    storageBucket: "my-app-4d82e.appspot.com",
    messagingSenderId: "624940863464",
    appId: "1:624940863464:web:290672630f391d04d99e5d",
    measurementId: "G-7RE2CELGM5"
};
  
if (firebase.apps.length) firebase.app();
else firebase.initializeApp(firebaseConfig);
export default firebase;