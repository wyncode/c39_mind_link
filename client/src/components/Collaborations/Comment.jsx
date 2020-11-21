import React from 'react';
// import CommentForm from './CommentForm';

// import { useContext } from 'react';
// import axios from 'axios';
// import { AppContext } from '../../context/AppContext';

const Comment = ({ comment }) => {
  // const { search } = useContext(AppContext);

  // const filteredComments = comments?.filter((comment) => {
  //   return comment.comment.toLowerCase();
  // return comment.comment.toLowerCase().includes(search.toLowerCase());
  // });
  // return comment.description.toLowerCase().includes(search.toLowerCase());

  return (
    <>
      <div>
        <div>{comment}</div>
        <>{/* <CommentForm comment={comments} /> */}</>
      </div>
    </>
  );
};

export default Comment;
