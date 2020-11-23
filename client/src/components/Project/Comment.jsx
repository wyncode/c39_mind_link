import React from 'react';
import './Comment.css';

const Comment = () => {
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

          <form>
            <div id="commentFormContainer">
              <form>
                <textarea
                  id="formComment"
                  name="formComment"
                  type="text"
                  rows="3"
                  cols="120"
                />
              </form>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
