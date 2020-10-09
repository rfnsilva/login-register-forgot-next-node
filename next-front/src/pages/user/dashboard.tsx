import React, { useContext, useEffect } from 'react';
import Head from 'next/head';

import { Cookie } from 'next-cookie';

import Card from '../../components/card/Card';
import { Container } from '../../styles/pages/Home';

export async function getServerSideProps(ctx) {
  const { cookie } = new Cookie(ctx);

  const userCookie = cookie.get('user') ? cookie.get('user') : '';

  if(!userCookie){
    ctx.res.setHeader("location", "/");
    ctx.res.statusCode = 302;
    ctx.res.end();
  }

  return {props: { userCookie }};
}


export default function Dashboard({ userCookie }){
  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Card user={userCookie} />
    </Container>
  )
}
