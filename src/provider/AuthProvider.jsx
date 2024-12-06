import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUserWithPassAndEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const createdUserLoginWithPassAndWith = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    const createUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true)
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        createUserWithPassAndEmail,
        loading,
        updateUserProfile,
        setUser,
        logOutUser,
        createdUserLoginWithPassAndWith,
        createUserWithGoogle,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;