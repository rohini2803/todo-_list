import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC-71Ah_BfCluqU_5lIxSnrMzCw9t8yG4Y",
  authDomain: "todo-51c24.firebaseapp.com",
  projectId: "todo-51c24",
  storageBucket: "todo-51c24.firebasestorage.app",
  messagingSenderId: "906239799832",
  appId: "1:906239799832:web:63b3530d94a2fc35ed896d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export { db, auth };
