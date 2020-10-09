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

      <Cadastro />
    </Container>
  )
}

export default Home
