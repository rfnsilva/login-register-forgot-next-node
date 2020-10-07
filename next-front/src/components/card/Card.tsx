import React, { useContext } from 'react';

import AuthContext from '../../contexts/Auth';

import { CardUser, Container } from './styles';

const Card: React.FC = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

  return (
    <>
      <Container>
        <CardUser>
          <input disabled type="text" value={user?.nome || ''} name="nome" />
          <input disabled type="email" value={user?.email || ''} name="email" />
        </CardUser>
      </Container>
    </>
  );
}

export default Card;
