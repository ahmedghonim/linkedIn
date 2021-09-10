import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { auth } from './firebase';
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { login, logout } from "./features/userSlice";
import  Widgets  from "./Widgets";

function App() {
  //{user} hw mafkok file reduser state.user hey reduser m7tot ka opject fe fil el stor 
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is loggedin 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        // user logged out
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
