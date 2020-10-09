import React, { useContext, useEffect } from 'react';
import Head from 'next/head'

import { Cookie } from 'next-cookie';

import LoginComponent from '../components/login/LoginComponent'
import { Container } from '../styles/pages/Principal';

export async function getServerSideProps(ctx) {
  const { cookie } = new Cookie(ctx);

  const userCookie = cookie.get('user') ? cookie.get('user') : '';

  if(userCookie){
    ctx.res.setHeader("location", "/user/dashboard");
    ctx.res.statusCode = 302;
    ctx.res.end();
  }

  return {props: { userCookie }};
}

export default function Login(){
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginComponent />
    </Container>
  )
}
