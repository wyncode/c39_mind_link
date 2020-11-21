import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentList = () => {
  const { comments, setComments } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/collaboration/details')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [comments, setComments]);
  console.log(comments);
  return (
    // const CommentList = () => {
    //   const { setComments, setFilteredComments, loading } = useContext(AppContext);

    //   useEffect(() => {
    //     axios
    //       //sends a request to the backend to get all comments
    //       .get('/collaboration/details')
    //       .then((response) => {
    //         setComments(response.data);
    //         setFilteredComments(response.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //     //1. whenever one of these changes, the useEffect is triggered
    //   }, [setComments, loading]);

    // return (
    // {comments.map((comment) => (
    //   key={comment._id}
    // ))}
    <div>
      <CommentForm />
      <Comment />
      {/* <div id="postBox">Sample Text</div> */}
      {/* {Comment.comment}
      {Comment} */}
      {/* <CommentForm /> */}

      {/* <CommentForm comments={filteredComments} />
      <div id="postContainer">
        <div>
          <img
            className="postAvatar"
            src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
            alt="avatar"
          />
        </div>
        <div id="postBox">
          Sample Text
          <Comment />
        </div>
      </div> */}
    </div>
  );
};

export default CommentList;
