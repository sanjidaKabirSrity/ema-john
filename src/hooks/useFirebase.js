import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user , setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
            }
          });
    },[]);
    
    const auth = getAuth();
    const providerGoogle = new GoogleAuthProvider();
    
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, providerGoogle)
        // .then((result) => {
        //     const user = result.user;
        //     console.log(result.user);
        // }).catch((error) => {
        //     console.log(error.message);
        // });
    }

    const signOutFrom = () => {
        signOut(auth).then(() => {
            setUser({})
          })
          .catch((error) => {
          });
    }
    return {
        user,
        signInUsingGoogle, 
        signOutFrom
    }
}

export default useFirebase;