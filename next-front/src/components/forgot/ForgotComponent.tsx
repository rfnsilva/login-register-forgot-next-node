import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

import AuthContext from '../../contexts/Auth';

import { MenuForm, Container, Options } from './styles';

interface User {
  email: string
}

const ForgotComponent: React.FC = () => {
  const router = useRouter();
  const [ usuario, setUsuario] = useState<User>(null)

  //context com a metodo que sera usado para realizar o forgot
  const { forgot } = useContext(AuthContext);

  //subimit form
  const SubmitForm = async () => {
    try{
      const response = await forgot(usuario);
      console.log(response)

      console.log('nova senha enviado para o email informado')
    } catch(error){
      console.log(error)
    }

  };

  const handleChange = async({ target }) => {
    setUsuario({
      ...usuario,
      [target.name]: target.value
    })
  }

  return (
    <>
      <Container>
        <h1>Forgot</h1>

        <MenuForm>
          <input type="email" placeholder="email pessoal" name="email" onChange={handleChange} />

          <button onClick={SubmitForm} type="submit">Forgot</button>
        </MenuForm>

        <Options>
          <Link href='/cadastrar'>
            <a>cadastrar</a>
          </Link>
          <Link href='/'>
            <a>login</a>
          </Link>
        </Options>
      </Container>
    </>
  );
}

export default ForgotComponent;
