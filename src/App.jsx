import React from 'react';
import PostCard from './components/postcard';

const App = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      username: 'JohnDoe',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
      content: 'Just finished my first marathon! 🏃‍♂️ #RunningGoals',
    },
    {
      id: 2,
      username: 'JaneSmith',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
      content: 'Had an amazing trip to the mountains! 🌄',
    },
    {
      id: 3,
      username: 'AlexBrown',
      profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
      content: 'Coffee and coding ☕💻 #DeveloperLife',
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Social Media Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

// Basic styling
const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;