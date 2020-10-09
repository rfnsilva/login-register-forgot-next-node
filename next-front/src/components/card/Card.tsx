import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../contexts/Auth';

import { Container, CardUser } from './styles';

export default function Card({ usuario }){
  //const { user } = useContext(AuthContext);
  //console.log(user)
  const router = useRouter();

  const { signOut } = useContext(AuthContext);

  //signOut button
  const logout = async () => {
    try{
      const response = signOut();

      if(response){
        router.push('/');
      }
    } catch(error){
      console.log(error)
    }

  };

  return (
    <Container>
      <h1>Dados</h1>

      <CardUser>
        <input disabled type="text" name="id" value={usuario?.id || ''} />
        <input disabled type="text" name="nome" value={usuario?.nome || ''} />
        <input disabled type="email" name="email" value={usuario?.email || ''} />
        <input disabled type="text" name="token" value={usuario?.token || ''} />
      </CardUser>

      <button onClick={logout} type="button">Logout</button>
    </Container>
  );
}
