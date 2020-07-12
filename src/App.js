import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Dinesh",
      caption: "Wow! Suuper",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/react.svg",
    },
    {
      username: "Dinesh",
      caption: "Wow! Suuper",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/react.svg",
    },
  ]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
          className="app_headerImage"
        />
      </div>
      <h1>Instagram Clone</h1>
      {posts.map((post) => {
        return (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
