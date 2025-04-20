import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyC7Ey0YC4skCOgZnvvcVOTjIW6zlhABUIo",
    authDomain: "netflix-project-7365a.firebaseapp.com",
    projectId: "netflix-project-7365a",
    storageBucket: "netflix-project-7365a.firebasestorage.app",
    messagingSenderId: "30107610185",
    appId: "1:30107610185:web:ea4bda5c0a8d4061b42398"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid:user.uid,
            name,
            authProvider: "local",
            email,
        }); 
}  catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
        }
}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }

}

const logout = ()=>{
    signOut(auth);
}

export {auth, db,login,signup,logout};