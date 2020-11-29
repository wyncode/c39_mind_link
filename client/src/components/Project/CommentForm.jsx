import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import './CommentForm.css';

const CommentForm = ({ specProject }) => {
  const [commentData, setCommentData] = useState({});
  const { setLoading } = useContext(AppContext);

  let { id } = useParams();

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
        url: `/api/projects/project/${id}/comments`,
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
              src={
                specProject.avatar
                  ? specProject.avatar
                  : 'https://files.willkennedy.dev/wyncode/wyncode.png'
              }
              alt="avatar"
            />
          </div>

          <form onSubmit={handleCommentSubmission}>
            <div id="commentFormContainer">
              <textarea
                id="formComment"
                name="comment"
                type="text"
                rows="3"
                cols="120"
                placeholder="Enter your comment here..."
                required={true}
                onChange={handleChange('comment')}
              />

              <div>
                <button
                  className="submitButton"
                  type="submit"
                  onSubmit={handleCommentSubmission}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
