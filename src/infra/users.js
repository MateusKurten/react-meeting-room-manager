import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export function userLogin(user, setUser) {
    signInWithEmailAndPassword(auth, user.email, user.password)
        .then((credenciais) => {
            console.log(credenciais);
            setUser((obj) => {
                const r = {
                    ...obj,
                    ["id"]: credenciais.user.uid,
                };
                return r;
            });
        })
        .catch((error) => {
            alert("Invalid login: " + error.message);
        });
}

export function userLogout(user, setUser) {
    signOut(auth).then(() => {
        setUser({ id: "", email: "", password: "" });
    });
}

export function createAccount(user, setUser) {
    createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((credenciais) => {
            setUser((obj) => {
                const r = {
                    ...obj,
                    ["id"]: credenciais.user.uid,
                };
                return r;
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Error creating account: " + errorMessage);
        });
}