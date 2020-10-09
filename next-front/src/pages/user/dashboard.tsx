import React from 'react';
import Head from 'next/head';

import Card from '../../components/card/Card';

import { Container } from '../../styles/pages/Home';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Card />
    </Container>
  )
}

export default Dashboard;
