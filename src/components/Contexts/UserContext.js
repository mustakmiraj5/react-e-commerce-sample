import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
} 

const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const AuthInfo = {user, createUser}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;