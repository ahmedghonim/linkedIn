import React from "react";
import "./Header.scss";
/* ------------------------ */
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
/* ------------------------ */
import HeaderOptions from "./HeaderOptions";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
function Header() {
  const { user } = useSelector(state => state.user)


  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className="header">
      <div className="header__left">
        <img src="./linkedin.svg" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="search" name="" id="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title='Home' />
        <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOptions Icon={MessageIcon} title='Messaging' />
        <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
        <HeaderOptions onClick={logoutOfApp} avatar title={user?.displayName} />
      </div>
    </div>
  );
}

export default Header;