import React, { useEffect, useState } from 'react';
import { http } from '../../../services/api';
import DisplayCode from '../../atoms/display-code';
import Title from '../../atoms/title';

const Content: React.FC = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    http.get('/users').then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <div>
      <Title data-cy="user-list">Lista de usuários</Title>
      <DisplayCode>{JSON.stringify(users, null, 4)}</DisplayCode>
    </div>
  );
};

export default Content;
