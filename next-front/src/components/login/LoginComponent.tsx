import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../contexts/Auth';

import { MenuForm, Container, Options } from './styles';

interface User {
  email: string,
  senha: string
}

const LoginComponent: React.FC = () => {
  const router = useRouter();
  const [ usuario, setUsuario] = useState<User>(null)

  //context com a metodo que sera usado para realizar o cadastro
  const { signIn } = useContext(AuthContext);

  //subimit form
  const SubmitForm = async () => {
    try{
      const response = await signIn(usuario);

      //verificar response
      if(response){
        router.push('/user/dashboard');
      }
      else{
        console.log('erro no response !') //tratar este erro mais tarde
      }
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
        <h1>Login</h1>

        <MenuForm>
          <input type="email" placeholder="email pessoal" name="email" onChange={handleChange} />
          <input type="password" placeholder="senha" name="senha" onChange={handleChange} />

          <button onClick={SubmitForm} type="submit">Login</button>
        </MenuForm>

        <Options>
          <a href="#">cadastrar</a>
          <a href="#">forgot</a>
        </Options>
      </Container>
    </>
  );
}

export default LoginComponent;
