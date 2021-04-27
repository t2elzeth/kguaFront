import React from 'react'

import '../../public/styles/index.scss'

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  return <Component {...pageProps} />
}
