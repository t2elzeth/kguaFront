import React from 'react'
import { appWithTranslation } from 'next-i18next'
import '../../public/styles/index.scss'
import MainLayout from '../MainLayout'

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default appWithTranslation(MyApp)
