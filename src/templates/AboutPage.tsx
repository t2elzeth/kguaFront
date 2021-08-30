import { useCallback, useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Sidebar, MobileMenu, News } from '@Components'
import fetchData from '@src/services/fetchData'

export type AboutPageProps = {
  t: any
  pageName: string
  pageTitle: string
  image: string
  secondLinks?: any
}

const AboutPage: React.FC<AboutPageProps> = ({
  secondLinks,
  t,
  pageName,
  pageTitle,
  children,
  image,
}) => {
  const router = useRouter()

  const links = t('sidebar_list', { returnObjects: true })

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
    <div className="about-page">
      <Head>
        <title>{pageName}</title>
      </Head>
      <MobileMenu links={secondLinks ? secondLinks : links} />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img alt="" className="mainImage" src={image} />
        <div className="body">
          <Sidebar links={secondLinks ? secondLinks : links} />
          <div className="content">{children}</div>
        </div>
      </div>
      <News news={news} />
    </div>
  )
}

AboutPage.defaultProps = {
  secondLinks: [],
}

export default AboutPage
