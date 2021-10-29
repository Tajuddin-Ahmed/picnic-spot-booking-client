import initializeAuthentication from "../pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
const useFirebase = () => {
    const [user, setUser] = useState({})
    // initialization 
    initializeAuthentication();

    // google sign in 
    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;