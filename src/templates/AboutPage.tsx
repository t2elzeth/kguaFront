import { Sidebar, MobileMenu } from '@Components'
import Head from 'next/head'

export type AboutPageProps = {
  t: any
  pageName: string
  pageTitle: string
  image: string
}

const AboutPage: React.FC<AboutPageProps> = ({ t, pageName, pageTitle, children, image }) => {
  const links = t('sidebar_list', { returnObjects: true })

  return (
    <div className="about-page">
      <Head>
        <title>{pageName}</title>
      </Head>
      <MobileMenu links={links} />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img alt="" className="mainImage" src={image} />
        <div className="body">
          <Sidebar links={links} />
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
