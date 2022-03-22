import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyDAMlOppwEZl3BluwKjpceiz_hKP8r5Nso",

    authDomain: "chat-project-a749c.firebaseapp.com",
  
    projectId: "chat-project-a749c",
  
    storageBucket: "chat-project-a749c.appspot.com",
  
    messagingSenderId: "388386823766",
  
    appId: "1:388386823766:web:037fdc8e452889411e25f7"

}).auth();