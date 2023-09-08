import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjmtHQVkKG8GwvD0ZlYAl3Oj71Vb9XMtw",
  authDomain: "posts-11af8.firebaseapp.com",
  projectId: "posts-11af8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
