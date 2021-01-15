import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Container } from './styles';

function Landing() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      const data = response.data.map((user) => ({
        ...user,
      }));
      setUsers(data);
    }
    loadUsers();
  }, []);

  return (
    <Container>
      {users.map((user) => (
        <li key={String(user.id)} className="home-card">
          <img src={user.avatar_url} alt={user.avatar_url} />
          <strong>{user.login}</strong>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >{`www.github.com/${user.login}`}</a>
        </li>
      ))}
    </Container>
  );
}

export default Landing;
