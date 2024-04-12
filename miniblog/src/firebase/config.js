import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjrk9-uheVNb7yhUOd9EO65-kHswGpFmo",
  authDomain: "miniblog-react-28ccb.firebaseapp.com",
  projectId: "miniblog-react-28ccb",
  storageBucket: "miniblog-react-28ccb.appspot.com",
  messagingSenderId: "508245708044",
  appId: "1:508245708044:web:751e38d27320628ab18d29",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
