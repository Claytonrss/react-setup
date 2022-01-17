import React, { useEffect, useState } from 'react';
import { http } from '../../services/api';
import { Title } from './styles';

const App: React.FC = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    http.get('/users').then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <div>
      <Title data-cy="user-list">Lista de usuários</Title>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
};

export default App;
