import { News, Sidebar, MobileMenu } from '@Components'
import Head from 'next/head'

export type StructurePageProps = {
  pageName?: string
  pageTitle?: string
  image?: string
}
const links = {
  title: 'Структура университета',
  active: false,
  routes: [
    {
      title: 'Ректорат',
      route: '/about/structure/administration',
    },

    {
      title: 'Структурные подразделения',
      route: '/about/structure/structural-units',
    },

    {
      title: 'Учебные подразделения',
      route: '/about/structure/training-units',
    },
    {
      title: 'Кафедры',
      route: '/about/structure/departments',
    },
  ],
}

const StructurePage: React.FC<StructurePageProps> = ({ pageName, pageTitle, children, image }) => {
  return (
    <div className="about-page">
      <Head>
        <title>{pageName}</title>
      </Head>
      <MobileMenu links={links} />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img className="mainImage" src={image} alt="" />
        <div className="body">
          <Sidebar links={links} />
          <div className="content"> {children}</div>
        </div>
      </div>
      <News />
    </div>
  )
}

export default StructurePage
