import React, { useContext } from 'react';
import Head from 'next/head';

import AuthContext from '../../contexts/Auth';

import Card from '../../components/card/Card';

import { Container } from '../../styles/pages/Home';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>

      <h1>Dados</h1>

      <Card />
    </Container>
  )
}

export default Dashboard;
