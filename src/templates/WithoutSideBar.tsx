import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import fetchData from '@src/services/fetchData'
import { News } from '@Components'

export type WithoutSideBarProps = {
  pageName: string
}

const WithoutSideBar: React.FC<WithoutSideBarProps> = ({ pageName, children }) => {
  const router = useRouter()

  const [news, setNews] = useState([])

  const fetch = useCallback(async () => {
    try {
      const res = await fetchData('news', { lang: router.locale })
      setNews(res)
    } catch (error) {
      console.log(error)
    }
  }, [router])

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <div className="structure-page">
      <Head>
        <title>{pageName}</title>
      </Head>
      <div className="main">{children}</div>
      <News news={news} />
    </div>
  )
}

export default WithoutSideBar
