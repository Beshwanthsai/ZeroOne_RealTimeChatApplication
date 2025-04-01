import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDNYh92GDqN81V8y2FSM8EtJQj2erN03fA",
  authDomain: "zeroone-project-e1642.firebaseapp.com",
  projectId: "zeroone-project-e1642",
  storageBucket: "zeroone-project-e1642.firebasestorage.app",
  messagingSenderId: "268022350222",
  appId: "1:268022350222:web:172c4062d55b04d85ca4df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;