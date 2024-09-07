/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const UserContext = createContext();

const AuthContext = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = (provider) =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password,)
    }

    const logOut = () =>{
        localStorage.removeItem('geniusToken')
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubcribe =  onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubcribe();
        }
    },[])


    const authInfo = {user, loading, logOut, createUser, logIn, googleSignin}

    return (
        <UserContext.Provider value ={authInfo} >
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;