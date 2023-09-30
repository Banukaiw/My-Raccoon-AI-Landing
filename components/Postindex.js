import { TvRounded } from "@material-ui/icons";
import React from "react";

const Post = (props) => (
  <div>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <div>
      {" "}
      <a href={`/${props.id}`}>View Post</a>
    </div>
    <hr></hr>
  </div>
);

export default Post;
