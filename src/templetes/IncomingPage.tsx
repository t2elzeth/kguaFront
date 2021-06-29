import { Header, Footer, News, Sidebar, MobileMenu } from '@Components'
import Head from 'next/head'

export type IncomingPageProps = {
  pageName: string,
  pageTitle: string,
  image: string
}

const links = [
  {
    routes: [
      {
        title: 'Аспирантура и докторантура ',
        route: '/incoming/graduate-school'
      },
      {
        title: 'Бакалавриат',
        route: '/incoming/bachelor-degree'
      },
      {
        title: 'Среднее профессиональное образование',
        route: '/incoming/secondary-education'
      },
      {
        title: 'Правила приёма в КГЮА',
        route: '/incoming/admission-rules'
      },
    ]
  },
]
const IncomingPage: React.FC<IncomingPageProps> = ({ pageName, pageTitle, children, image }) => {
  return (
    <div className="about-page">
      <Head >
        <title>{pageName}</title>
      </Head>
      <Header />
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
      <Footer />
    </div>
  )
}

export default IncomingPage