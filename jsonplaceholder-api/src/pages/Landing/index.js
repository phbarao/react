import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { PostsList } from './styles';

export default function Landing() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('posts');

      const data = response.data.map((post) => ({
        ...post,
      }));

      setPosts(data);
    }
    loadPosts();
  }, []);

  return (
    <PostsList>
      {posts.map((post) => (
        <li key={String(post.id)}>
          <strong>{post.title}</strong>

          <p>{post.body}</p>
        </li>
      ))}
    </PostsList>
  );
}
