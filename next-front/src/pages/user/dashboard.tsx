import React from 'react'
import Head from 'next/head'

const Dashboard: React.FC = () => {
  const local = localStorage.getItem('user')
  console.log(local)

  return (
      <h1>Bem vindo vagabundo kkkk</h1>
  )
}

export default Dashboard;
