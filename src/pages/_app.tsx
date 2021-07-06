import React from 'react'
import { appWithTranslation } from 'next-i18next'
import '../../public/styles/index.scss'

function MyApp({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  return <Component {...pageProps} />
}
export default appWithTranslation(MyApp)
