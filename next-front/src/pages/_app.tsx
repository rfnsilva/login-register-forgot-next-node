import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

import { AuthProvider } from '../contexts/Auth'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
