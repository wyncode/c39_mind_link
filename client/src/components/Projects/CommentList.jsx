import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentList = () => {
  const { comments, setComments } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('api/users/collaboration/details')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [comments, setComments]);
  console.log(comments);
  return (
    <div>
      <CommentForm />
      <Comment />
    </div>
  );
};

export default CommentList;
