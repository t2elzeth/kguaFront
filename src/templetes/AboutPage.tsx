import { Header, Footer, News, Sidebar, MobileMenu } from '@Components'
import Head from 'next/head'

export type AboutPageProps = {
  pageName: string,
  pageTitle: string,
  image: string
}

const AboutPage: React.FC<AboutPageProps> = ({ pageName, pageTitle, children, image }) => {
  return (
    <div className="about-page">
      <Head >
        <title>{pageName}</title>
      </Head>
      <Header />
      <MobileMenu />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img className="image" src={image} />
        <div className="body">
          <Sidebar />
          <div className="content"> {children}</div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default AboutPage
