import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.scss";
function Sidebar() {

const {user} = useSelector(state => state.user)  
  const recentItem = (topic) => (
    <div className="sidbar__recentItem">
      <span className="sidbar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidbar__top">
        <img
          src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
        <Avatar src={user?.photoURL} className="sidbar__avater" >{user?.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">2,500</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statnumber">2,100</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("recat js")}
        {recentItem("redux")}
        {recentItem("axios")}
        {recentItem("scss")}
        {recentItem("materila ui")}
        {recentItem("ES6")}
      </div>
    </div>
  );
}

export default Sidebar;
