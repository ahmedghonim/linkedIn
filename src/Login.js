import React, { useState } from "react";
import "./Login.scss";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from './features/userSlice.js'
function Login() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const dispatch = useDispatch()
    
    const loginToApp = (e) => {
        e.preventDefault();
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilePic: userAuth.user.photoURL,

            }))
        }).catch(erorr => alert(erorr))
    };

    const register = () => {
        if (!name) {

            return alert("please enter a full name!")
        }
        auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,

                }))
            })
        }).catch(erorr => alert(erorr))
    };
    return (
        <div className="login">
            <img
                src="https://brandlogos.net/wp-content/uploads/2017/01/linkedin-logo.png"
                alt=""
            />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (requier)" name="" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile bic URL (optional)" name="" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" name="" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" name="" />
                <button type="submit" onClick={(e) => loginToApp(e)}>
                    Sign In
                </button>
            </form>
            <p>
                Not a member?{' '}
                <span className="login__register" onClick={register}>
                    Register now
                </span>
            </p>
        </div>
    );
}

export default Login;
