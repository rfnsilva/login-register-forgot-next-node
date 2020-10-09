import React, { useContext, useEffect } from 'react';

import AuthContext from '../../contexts/Auth';

import { Container, CardUser, Options } from './styles';

const Card: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);

  const logout = () => {
    signOut();
  }

  return (
    <Container>
      <h1>Dados</h1>

      <CardUser>
        <input disabled type="text" name="id" value={user?.id || ''} />
        <input disabled type="text" name="nome" value={user?.nome || ''} />
        <input disabled type="email" name="email" value={user?.email || ''} />
        <input disabled type="text" name="token" value={user?.token || ''} />
      </CardUser>

      <Options>
        <button onClick={logout} type="button">Logout</button>
      </Options>
    </Container>
  );
}

export default Card;
