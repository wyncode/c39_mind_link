import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const CommentForm = () => {
  const [commentData, setCommentData] = useState(null);
  const { setLoading } = useContext(AppContext);

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };
  const handleCommentSubmission = async (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: '/collaboration/details',
        data: commentData
      });

      setCommentData(e.target);
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div id="postContainer">
        <div id="commentContainer">
          <div>
            <img
              className="commentAvatar"
              src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
              alt="avatar"
            />
          </div>
          <div>
            <form onSubmit={handleCommentSubmission}>
              <form>
                <input
                  id="comment"
                  name="comment"
                  type="text"
                  placeholder="Enter your comment here..."
                  required={true}
                  onChange={handleChange}
                  //try out line below, after finding a way to bring comment in
                  // value={comment.comment}
                />
              </form>
              <div>
                <button className="submitButton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
