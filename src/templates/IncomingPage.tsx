import { News, Sidebar, MobileMenu } from '@Components'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

export type IncomingPageProps = {
  pageName: string
  pageTitle: string
  image: string
}

const IncomingPage: React.FC<IncomingPageProps> = ({ pageName, pageTitle, children, image }) => {
  const { t } = useTranslation()
  const links = t('sidebar_list', { returnObjects: true })

  return (
    <div className="incoming-page">
      <Head>
        <title>{pageName}</title>
      </Head>
      <MobileMenu links={links} />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img className="mainImage" src={image} />
        <div className="body">
          <Sidebar links={links} />
          <div className="content"> {children}</div>
        </div>
      </div>
      <News />
    </div>
  )
}

export default IncomingPage
