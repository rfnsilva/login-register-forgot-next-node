import React from 'react'
import Head from 'next/head'

import LoginComponent from '../components/login/LoginComponent'

import { Container } from '../styles/pages/Home';

const Login: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <h1>Login</h1>

      <LoginComponent />
    </Container>
  )
}

export default Login
