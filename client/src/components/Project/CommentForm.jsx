import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import './CommentForm.css';

const CommentForm = () => {
  const [commentData, setCommentData] = useState({});
  const { setLoading } = useContext(AppContext);

  const handleChange = (field) => (evt) => {
    setCommentData({ ...commentData, [field]: evt.target.value });
  };
  const handleCommentSubmission = async (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: '/api/comments',
        data: commentData
      });

      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleCommentSubmission}>
              <form>
                <input
                  id="formComment"
                  name="formComment"
                  type="text"
                  placeholder="Enter your comment here..."
                  required={true}
                  onChange={handleChange('formComment')}
                />
                <input
                  id="formName"
                  name="formName"
                  type="text"
                  placeholder="Name"
                  required={true}
                  onChange={handleChange('name')}
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
