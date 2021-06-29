import { Header, Footer, News, Sidebar, MobileMenu } from '@Components'
import Head from 'next/head'

export type AboutPageProps = {
  pageName: string,
  pageTitle: string,
  image: string
}
const links = [
  {
    title: 'Информация о КГЮА',
    active: false,
    routes: [
      {
        title: 'Основные сведения',
        route: '/about'
      },
      // {
      //   title: 'История образования и развития КГЮА',
      //   route: ''
      // },
      {
        title: 'Миссия и стратегия',
        route: '/about/mission'
      },
      {
        title: 'Символика',
        route: '/about/symbolism'
      },
      {
        title: 'Награды и звания',
        route: '/about/awards'
      },
      {
        title: 'Документы',
        route: '/about/documents'
      },
      {
        title: 'Локальные-нормативные акты',
        route: '/about/local-acts'
      },
      // {
      //   title: 'Материально-техническая база университета',
      //   route: ''
      // },
    ]
  },
  // {
  //   title: 'Структура университета',
  //   active: true,
  //   routes: [
  //     {
  //       title: 'Ректорат',
  //       route: ''
  //     },
  //     {
  //       title: 'Кафедры',
  //       route: ''
  //     },
  //     {
  //       title: 'Структурные подразделения',
  //       route: ''
  //     },
  //     {
  //       title: 'Учебные подразделения',
  //       route: ''
  //     },
  //   ]
  // },
  // {
  //   title: 'Персонал',
  //   active: false,
  //   route: '/staff',
  // },
  // {
  //   title: 'Электронные ресурсы ',
  //   active: false,
  //   routes: [

  //   ]
  // },
  // {
  //   title: 'Ассоциация выпускников ',
  //   active: false,
  //   route: '/alumni-association',
  // },
  // {
  //   title: 'Жизнь КГЮА',
  //   active: false,
  //   routes: [

  //   ]
  // },
  // {
  //   title: 'Виртуальный тур',
  //   active: false,
  //   routes: [

  //   ]
  // },
  // {
  //   title: 'Контакты',
  //   active: false,
  //   route: '/contacts'
  // },
]


const AboutPage: React.FC<AboutPageProps> = ({ pageName, pageTitle, children, image }) => {
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

export default AboutPage
