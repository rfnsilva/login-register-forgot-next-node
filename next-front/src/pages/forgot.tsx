import React from 'react'
import Head from 'next/head'

import ForgotComponent from '../components/forgot/ForgotComponent'

import { Container } from '../styles/pages/Home';

const Login: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Forgot</title>
      </Head>

      <h1>Forgot</h1>

      <ForgotComponent />
    </Container>
  )
}

export default Login
