
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDFQhkKNzox6NTuSsyRu_UqgnBytOVgrvE",
authDomain: "clone-defe7.firebaseapp.com",
projectId: "clone-defe7",
storageBucket: "clone-defe7.appspot.com",
messagingSenderId: "1073138748192",
appId: "1:1073138748192:web:d8cb3d92916eca2119a545",
measurementId: "G-3LS71WY9D4"
};
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
export{db,auth,storage};



