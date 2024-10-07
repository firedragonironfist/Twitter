import React from "react";

function Post({ src, text }) {
  return (
    <div>
      <div>{/* Left Image */}</div>
      <div>
        <div>{/* username */}</div>
        <div>
          <div>{/* Text if any */}</div>
          <div>{/* Image if any */}</div>
        </div>
        <div>
          <div>{/* Comment Icon + Count */}</div>
          <div>{/* Like Icon + Count */}</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
