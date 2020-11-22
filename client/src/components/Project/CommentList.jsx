import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import CommentForm from './CommentForm';
import Comment from './Comment';
import './CommentList.css';

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

const CommentList = () => {
  const { comments, setComments } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/comments')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <CommentForm />
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
