import React from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import './CommentList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CommentList = ({ specProject }) => {
  const [comments, setComments] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const projectComments = await axios.get(`/api/projects/comments`);
        setComments(projectComments.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchComments();
  }, [comments, id]);

  return (
    <div>
      <CommentForm specProject={specProject} />
      <div id="commentList">
        {comments.map((comment) => {
          return <Comment key={comment._id} comments={comment} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
