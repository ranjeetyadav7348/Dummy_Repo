// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyDV7zPRR4m5uqIkLQOuPfZswqRfxFFTvrM",
//     authDomain: "learnerspace-1eac8.firebaseapp.com",
//     projectId: "learnerspace-1eac8",
//     storageBucket: "learnerspace-1eac8.appspot.com",
//     messagingSenderId: "352733195928",
//     appId: "1:352733195928:web:aea7469615784e49672aed"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// export const auth = firebase.auth();
// export const storage = firebase.storage();

// export default db;
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
    // apiKey: "AIzaSyDV7zPRR4m5uqIkLQOuPfZswqRfxFFTvrM",
    // authDomain: "learnerspace-1eac8.firebaseapp.com",
    // projectId: "learnerspace-1eac8",
    // storageBucket: "learnerspace-1eac8.appspot.com",
    // messagingSenderId: "352733195928",
    // appId: "1:352733195928:web:aea7469615784e49672aed"
    apiKey: "AIzaSyCvR1nHZgvWEwlTfA7sGu-p0-8umnYLgFs",
    authDomain: "learner-hub-fa3e7.firebaseapp.com",
  // databaseURL: "https://learner-hub-fa3e7-default-rtdb.firebaseio.com",
    projectId: "learner-hub-fa3e7",
    storageBucket: "learner-hub-fa3e7.appspot.com",
    messagingSenderId: "766262514800",
    appId: "1:766262514800:web:5928c2eb1d6823417490b5",
   // measurementId: "G-G6TGF2XNDM"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default auth;