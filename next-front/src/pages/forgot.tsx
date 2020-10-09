import React from 'react'
import Head from 'next/head'

import ForgotComponent from '../components/forgot/ForgotComponent'

import { Container } from '../styles/pages/Principal';

const Forgot: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Forgot</title>
      </Head>

      <ForgotComponent />
    </Container>
  )
}

export default Forgot
