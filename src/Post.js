import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

const Post = ({ username, caption, imageUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Dinesh"
          src="https://cdn.worldvectorlogo.com/logos/react.svg"
        />
        <h3>{username}</h3>
      </div>

      <img src={imageUrl} alt="postImage" className="post__image" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
