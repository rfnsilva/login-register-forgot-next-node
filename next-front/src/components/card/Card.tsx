import React, { useContext, useEffect } from 'react';

import { Container, CardUser } from './styles';

export default function Card({ user }){
  return (
    <Container>
      <h1>Dados</h1>

      <CardUser>
        <input disabled type="text" name="id" value={user?.id || ''} />
        <input disabled type="text" name="nome" value={user?.nome || ''} />
        <input disabled type="email" name="email" value={user?.email || ''} />
        <input disabled type="text" name="token" value={user?.token || ''} />
      </CardUser>

      { /*
      <Options>
        <button onClick={logout} type="button">Logout</button>
      </Options> */ }
    </Container>
  );
}
