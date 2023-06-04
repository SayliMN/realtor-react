import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

export default function useAuthStatus() {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ checkingStatus, setCheckingStatus ] = useState(true)

    // check if the user is authenticated or not
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user){
                setLoggedIn(true)
            }
            setCheckingStatus(false)
        })
    }, [])
  return { loggedIn, checkingStatus };
}
