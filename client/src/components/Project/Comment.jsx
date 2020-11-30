import React from 'react';
import './Comment.css';

const Comment = ({ comments }) => {
  return (
    <div>
      <div id="postContainer2">
        <div id="commentContainer">
          <div>
            <img
              className="commentAvatar"
              src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
              alt="avatar"
            />
          </div>
          <div>
            <div id="commentsFormContainer">Comment: {comments.comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
