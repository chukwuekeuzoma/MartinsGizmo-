import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
      apiKey:process.env.REACT_APP_FIREBASE_API_KEY,        
      authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId:process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId:process.env.REACT_APP_FIREBASE_MEASURMENT_ID

});

export const auth = app.auth();

export default app;

//   var firebaseConfig = {
//     apiKey: "AIzaSyBCUjlbx6hGKOhIzgKtBKusLDcD_OMWjz0",
//     authDomain: "martinsgizmo.firebaseapp.com",
//     projectId: "martinsgizmo",
//     storageBucket: "martinsgizmo.appspot.com",
//     messagingSenderId: "411386329446",
//     appId: "1:411386329446:web:09500d524aaae84db5f0a7",
//     measurementId: "G-W1QWW9M9XD"
//   };

//   const fire = firebase.initializeApp(firebaseConfig);


// //   firebase.analytics();

// export default fire;