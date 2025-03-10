import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <img
        src={post.profilePic}
        alt={post.username}
        style={styles.profilePic}
      />
      <div style={styles.content}>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
  },
  profilePic: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  content: {
    flex: 1,
  },
};

export default PostCard;