import { Header, Footer, News, Sidebar, MobileMenu } from '@Components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export type AboutPageProps = {
  pageName: string
  pageTitle: string
  image: string
}
const links = {
  title: 'Информация о КГЮА',
  active: false,
  routes: [
    {
      title: 'Основные сведения',
      route: '/about',
    },
    // {
    //   title: 'История образования и развития КГЮА',
    //   route: ''
    // },
    {
      title: 'Миссия и стратегия',
      route: '/about/mission',
    },
    {
      title: 'Символика',
      route: '/about/symbolism',
    },
    {
      title: 'Награды и звания',
      route: '/about/awards',
    },
    {
      title: 'Документы',
      route: '/about/documents',
    },
    {
      title: 'Локальные-нормативные акты',
      route: '/about/local-acts',
    },
    // {
    //   title: 'Материально-техническая база университета',
    //   route: ''
    // },
  ],
}

const AboutPage: React.FC<AboutPageProps> = ({ pageName, pageTitle, children, image }) => {
  return (
    <div className="about-page">
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

export default AboutPage
