import "./App.css";
import LogIn from "../src/components/LogIn/LogIn";
import Chat from "../src/components/Chat/Chat";
import "firebase/compat/auth";
import { useState,useEffect } from "react";
import { app } from "../src/components/firebase/firebase"
import AuthProvider from "./components/contexts/AuthContext";

function App() {
  const [user,setUser] = useState(null);

  useEffect(() => {
    app.onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [user])
  
  return (
 <AuthProvider>
   { user? <Chat/> : <LogIn/>}
 </AuthProvider>
  );
}

export default App;
