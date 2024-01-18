import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbIzwsfzYSXMfK_NSN-VwBDxYjRLuABKE",
  authDomain: "fir-auth-6816a.firebaseapp.com",
  projectId: "fir-auth-6816a",
  storageBucket: "fir-auth-6816a.appspot.com",
  messagingSenderId: "462969558784",
  appId: "1:462969558784:web:6ace7f7f42c95e8d9105e5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
