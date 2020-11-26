import React from 'react';
// import { useContext, useEffect } from 'react';
// import { AppContext } from '../../context/AppContext';
// import axios from 'axios';
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

const CommentList = ({ specProject }) => {
  // const { comments, setComments } = useContext(AppContext);

  // useEffect(() => {
  //   axios
  //     //need to add route
  //     .get('./')
  //     .then((response) => {
  //       setComments(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  return (
    <div>
      <CommentForm specProject={specProject} />
      <Comment />

      {/* <Comment comments={comments} /> */}
    </div>
  );
};

export default CommentList;
