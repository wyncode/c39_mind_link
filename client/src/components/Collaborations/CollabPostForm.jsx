import React, { useState } from 'react';
import axios from 'axios';

const CollabPostForm = () => {
  const [commentData, setCommentData] = useState('');
  const initialState = { title: '', text: '' };
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };
  const handleCommentSubmission = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: '/collaboration/details',
        data: commentData
      });
      setCommentData(null);
      form.reset();
      console.log(commentData);
    } catch (error) {
      console.log(error);
    }
  };

  //   fetch('/collaboration/details', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(values)
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         alert('Comment successfully created');
  //         return response.json().then((comment) => {
  //           // history.push(`/articles/${article._id}`);
  //         });
  //       }
  //     })
  //     .catch((error) => alert(error));
  // };
  return (
    <div>
      <div>Log of blog post</div>
      <div id="commentContainer">
        <div>
          <img
            className="commentAvatar"
            src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
            alt="avatar"
          />
        </div>
        <form onSubmit={handleCommentSubmission}>
          {/* <label htmlFor="comment">Comment</label> */}
          <input
            id="comment"
            name="comment"
            type="text"
            placeholder="Enter your comment here..."
            required={true}
            onChange={handleChange}
          />
        </form>
      </div>
      <button
        className="submitButton"
        type="submit"
        onSubmit={handleCommentSubmission}
      >
        Submit
      </button>
      {/* <div>Time/Date stamp</div> */}
    </div>
  );
};

export default CollabPostForm;
