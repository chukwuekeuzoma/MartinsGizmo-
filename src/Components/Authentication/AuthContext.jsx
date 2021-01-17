import React, {createContext, useContext, useState, useEffect} from 'react'
import { auth } from "../../fire"

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export  function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function createAccount(email, password){
      return  auth.createUserWithEmailAndPassword(email, password)
    }

    function SignIn(email, password){
        return  auth.signInWithEmailAndPassword(email, password)
      }
      
    
    useEffect(() =>{
      const unsubcribe =  auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
        return unsubcribe
    }, [])
 
   

    const value = {
        currentUser,
        createAccount,
        SignIn

    }

    return (
        <AuthContext.Provider value ={value}>
         {children}
        </AuthContext.Provider>
    ) 
}

 
