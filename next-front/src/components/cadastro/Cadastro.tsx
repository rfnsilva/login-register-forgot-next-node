import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../contexts/Auth';

import { MenuForm, Container, Options } from './styles';

interface User {
  nome: string,
  email: string,
  senha: string,
  csenha: string
}

const Cadastro: React.FC = () => {
  const router = useRouter();
  const [ usuario, setUsuario] = useState<User>(null)

  //context com a metodo que sera usado para realizar o cadastro
  const { signUp } = useContext(AuthContext);

  //subimit form
  const SubmitForm = async () => {
    try{
      const response = await signUp(usuario);

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
        <h1>Cadastrar</h1>

        <MenuForm>
          <input type="text" placeholder="nome" name="nome" onChange={handleChange} />
          <input type="email" placeholder="email pessoal" name="email" onChange={handleChange} />
          <input type="password" placeholder="senha" name="senha" onChange={handleChange} />
          <input type="password" placeholder="senha novamente" name="csenha" onChange={handleChange} />
          <p>
            Ao se cadastrar você automaticamente concorda com nossos <a href="/termos">Termos de Uso</a>
          </p>
          <button onClick={SubmitForm} type="submit">Cadastrar</button>
        </MenuForm>

        <Options>
          <a href="#">login</a>
          <a href="#">forgot</a>
        </Options>
      </Container>
    </>
  );
}

export default Cadastro;
