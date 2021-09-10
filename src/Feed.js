import React, { useEffect, useState } from "react";
import "./Feed.scss";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import { CalendarViewDay, EventNote, Subscriptions } from "@material-ui/icons";
import Image from "@material-ui/icons/Image";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  //1- DB nndhh we ngeb mnha el colection 
  //2- colection hnndh esm el colection ely gwa##
  //3- n3mel snapshot ya3ney ngeb ely mogod 
  //4- ndef el mogod gwa object bt3na 
  // 4 1- gwa el snapshot fe docs ell docs hwa ely fe el data  
  // 4 2- nmab 3lehom kolhom we ndefhom gwa data by docs.data() 

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      return setPosts(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  const { user } = useSelector(state => state.user)
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      descrebtion: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('')
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={Image} color="#70B5F9" title="Photo" />
          <InputOptions Icon={Subscriptions} color="#E7A33E" title="Video" />
          <InputOptions Icon={EventNote} color="#C0CBCD" title="Event" />
          <InputOptions
            Icon={CalendarViewDay}
            color="#7FC15E"
            title="Worit artical"
          />
        </div>
      </div>
      <FlipMove>

      {posts.map(
        ({ id, data: { name, descrebtion, message, photoUrl, timestamp } }) => (
          <Post
            key={id}
            name={name}
            descrebtion={descrebtion}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
          />
        )
      )}
      </FlipMove>

    </div>
  );
}

export default Feed;
