import firebase from 'firebase/app';
import 'firebase/storage';


export const firebaseConfig = {
    apiKey: "AIzaSyCaM0U-VLigg5aZqJd-fesW_nq3SePDmSQ",
    authDomain: "sweetproject-6cff9.firebaseapp.com",
    databaseURL: "https://sweetproject-6cff9.firebaseio.com",
    projectId: "sweetproject-6cff9",
    storageBucket: "sweetproject-6cff9.appspot.com",
    messagingSenderId: "275803230082",
    appId: "1:275803230082:web:fbf892a413ef69c95e899b"
  };




export const firebaseApp = firebase.initializeApp(firebaseConfig);


  