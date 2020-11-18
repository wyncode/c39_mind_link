import React, { useState } from 'react';
import axios from 'axios';

const CollabPostForm = () => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment({ comment, [e.target.name]: e.target.value });
  };
  const handleCommentSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await axios({
        method: 'POST',
        url: '/collaboration/details',
        data: comment
      });
      setComment('null');
      form.reset();
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
        onClick={handleCommentSubmission}
      >
        Submit
      </button>
    </div>
  );
};

export default CollabPostForm;
