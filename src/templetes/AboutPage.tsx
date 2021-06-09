import { Header, Footer, News, Sidebar } from '@Components'
import Head from 'next/head'

const sidebarLinks = [
  {
    title: 'Информация о КГЮА',
    active: true,
    routes: [
      {
        title: 'Основные сведения',
        route: '/about'
      },
      {
        title: 'История образования и развития КГЮА',
        route: ''
      },
      {
        title: 'Миссия и стратегия',
        route: ''
      },
      {
        title: 'Символика',
        route: ''
      },
      {
        title: 'Награды и звания',
        route: ''
      },
      {
        title: 'Документы',
        route: ''
      },
      {
        title: 'Локальные-нормативные акты',
        route: ''
      },
      {
        title: 'Материально-техническая база университета',
        route: ''
      },
    ]
  },
  {
    title: 'Структура университета',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Персонал',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Электронные ресурсы ',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Ассоциация выпускников ',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Жизнь КГЮА',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Виртуальный тур',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Контакты',
    active: false,
    routes: [

    ]
  },
]

export type AboutPageProps = {
  pageName: string,
  pageTitle: string,
  image: string
}

const AboutPage: React.FC<AboutPageProps> = ({ pageName, pageTitle, children, image }) => {
  return (
    <div className="about-page">
      <Head>
        {pageName}
      </Head>
      <Header />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img className="image" src={image} />
        <div className="body">
          <Sidebar links={sidebarLinks} />
          <div className="content"> {children}</div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default AboutPage
