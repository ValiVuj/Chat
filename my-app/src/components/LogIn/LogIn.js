import React from 'react'
import { GoogleAuthProvider } from "firebase/auth"
import { app } from '../firebase/firebase'

const LogIn = () => {
  return (
    <button onClick={() => app.signInWithPopup(new GoogleAuthProvider())}>
        LogIn
    </button>
  )
}

export default LogIn