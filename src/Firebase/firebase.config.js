// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey:import.meta.env.APIKEY,
//   authDomain:import.meta.env.AUTHDOMAIN,
//   projectId:import.meta.env.PROJECTID,
//   storageBucket:import.meta.env.STORAGEBUCKET,
//   messagingSenderId:import.meta.env.MESSAGINGSENDERID,
//   appId:import.meta.env.APPID,

  apiKey: "AIzaSyDNuZhWX6HgNX0V-4wJAaH0_tnGUCrYg4g",
  authDomain: "home-work595-45167.firebaseapp.com",
  projectId: "home-work595-45167",
  storageBucket: "home-work595-45167.appspot.com",
  messagingSenderId: "1020011552326",
  appId: "1:1020011552326:web:f7727ef0f43c12790d3447",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
