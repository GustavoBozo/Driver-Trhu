
import { initializeApp } from "firebase/app";
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAaZi5u7u7sQfx0d_HuFMhHQp2wve1KR8Y",
  authDomain: "tccdefinitivo-637a7.firebaseapp.com",
  projectId: "tccdefinitivo-637a7",
  databaseURL: "https://tccdefinitivo-637a7-default-rtdb.firebaseio.com/",
  storageBucket: "tccdefinitivo-637a7.appspot.com",
  messagingSenderId: "762341037806",
  appId: "1:762341037806:web:2d68019e15b3a5e7ee05ff",
  measurementId: "G-NGC6DM8TYJ"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
  
  