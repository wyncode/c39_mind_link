import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
// import CommentForm from './CommentForm';

import { useContext } from 'react';

import { AppContext } from '../../context/AppContext';

// useEffect(()=> {
//   Axios.get('/api/users/collaboration/details')
// })
// const Comment = ({ comment }) => {
// const { search } = useContext(AppContext);

// const filteredComments = comments?.filter((comment) => {
//   return comment.comment.toLowerCase();
// return comment.comment.toLowerCase().includes(search.toLowerCase());
// });
// return comment.description.toLowerCase().includes(search.toLowerCase());
const Comment = () => {
  const { commentList, setCommentList } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/api/users/collaboration/details')
      .then((response) => {
        setCommentList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [commentList, setCommentList]);
  console.log(commentList);
  return (
    <>
      <div>
        <div></div>
        <>{/* <CommentForm comment={comments} /> */}</>
      </div>
    </>
  );
};

export default Comment;
