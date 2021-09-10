import { Avatar } from "@material-ui/core";
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import React, { forwardRef } from "react";
import InputOptions from "./InputOptions";
import "./Post.scss";



const Post = forwardRef(({ name, descrebtion, message, photoUrl },ref) => {

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{descrebtion}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color='gray' />
        <InputOptions Icon={ChatOutlined} title="Chat" color='gray' />
        <InputOptions Icon={ShareOutlined} title="Share" color='gray' />
        <InputOptions Icon={SendOutlined} title="Send" color='gray' />
      </div>
    </div>
  );
}
)
export default Post;
