import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './firebase.config';



 export const contexs = createContext(null)

const Authprovider = ({children}) => {
    const [loading,setloading]=useState(true)
    const [photo,setphoto]= useState('')
    const [names,setnames]= useState('')

    // log ase naki  
    const [user,setuser]=useState(null)


    // google
    const provider = new GoogleAuthProvider();
    const google = ()=>{
        setloading(true)
        return signInWithPopup(auth,provider)
    }

    // password and email register 

    const regi = (email,password)=>{
        setloading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }
    // log out
    const logOut = ()=>{
        return signOut(auth)
    }
        // lon in
        const login = (email,password)=>{
          return signInWithEmailAndPassword(auth, email, password)
        }


         // photo
  const photo2 = (photos) => {
    setloading(true);

    return setphoto(photos);


    
  };
   // another
  const profile = (name, photo) => {
    setloading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  
  
  

    useEffect(()=>{
        const subscriber = onAuthStateChanged(auth,(objaiber)=>{
            setuser(objaiber)
            setloading(false)
        })
        return () => {
            subscriber()
        }
    },[])

 
    

const infor = {google,regi,user,logOut,login,profile,setphoto,photo, photo2,loading,setnames,names}

  return (
    <contexs.Provider value={infor}>
     {children}
    </contexs.Provider>
  )
}

export default Authprovider
