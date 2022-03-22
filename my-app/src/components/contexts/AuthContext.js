import React, {useState, useEffect, useContext} from 'react';
import Chat from '../Chat/Chat';
import { app } from '../firebase/firebase';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
  app.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) return <Chat />
  })
}, [user]);
const value ={user};

  return (
   <AuthContext.Provider value={value}>
       {!loading && children}
   </AuthContext.Provider>
  )
}

export default AuthProvider