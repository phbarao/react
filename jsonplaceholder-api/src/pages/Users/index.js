import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { UsersList } from './styles';

function Users() {
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
    <UsersList>
      {users.map((user) => (
        <li key={String(user.id)}>
          <strong>{user.name}</strong>
          <small>{user.email}</small>
          <p>{user.website}</p>
        </li>
      ))}
    </UsersList>
  );
}

export default Users;
