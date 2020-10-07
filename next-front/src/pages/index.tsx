import React from 'react'
import Head from 'next/head'

import Cadastro from '../components/cadastro/Cadastro'

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Cadastrar</title>
      </Head>

      <h1>Cadastro</h1>

      <Cadastro />
    </Container>
  )
}

export default Home
