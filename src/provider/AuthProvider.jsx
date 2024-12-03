import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const createUserWithPassAndEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    const createdUserLoginWithPassAndWith = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log(currentUser);
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