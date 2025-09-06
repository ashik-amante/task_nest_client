import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../firebase/firebase.config';
import axios from 'axios';
import useAxiosPublc from '../Hooks/useAxiosPublc';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState(null)
    const axiosPublc = useAxiosPublc()

    // create user 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // log in with email and pass 
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // create user with google
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // logout
    const logOut =async ()=>{
        setLoading(true)
        const {data} = await axiosPublc.get('/logout',{withCredentials:true})
        console.log(data);
        return signOut(auth)
    }
    // updadte user
    const updateUserProfile = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser ,{
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscriber()
        }
    },[])

    const authInfo = {
        createUser,
        user,
        loading,
        googleSignIn,
        logOut,
        updateUserProfile,
        logIn,
        setLoading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;