import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const provider = new GoogleAuthProvider();
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth);
    }
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser);
            setLoading(false)
        });
        return()=>{
            unSubscribe();
        }
    },[])
    
    const authData = {
        user,
        loading,
        setLoading,
        googleLogin,
        logIn,
        logOut,
        createUser,
        updateUser,
        setUser,
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;