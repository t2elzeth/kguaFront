import { Sidebar, MobileMenu } from '@Components'
import Head from 'next/head'

export type DepartmentsProps = {
  pageName?: string
  pageTitle?: string
  image?: string
  currentDepartments: any
  links: any
}

// const links = {
//   title: '',
//   active: false,
//   routes: [
//     {
//       title: 'departments.dafil',
//       route: '/about/structure/departments/dafil',
//     },
//     {
//       title: 'departments.dcfl',
//       route: '/about/structure/departments/dcfl',
//     },
//     {
//       title: 'departments.dcpn',
//       route: '/about/structure/departments/dcpn',
//     },
//     {
//       title: 'departments.dlael',
//       route: '/about/structure/departments/dlael',
//     },
//     {
//       title: 'departments.ditnsd',
//       route: '/about/structure/departments/ditnsd',
//     },
//     {
//       title: 'departments.dcml',
//       route: '/about/structure/departments/dcml',
//     },
//     {
//       title: 'departments.dcfe',
//       route: '/about/structure/departments/dcfe',
//     },
//     {
//       title: 'departments.dpcs',
//       route: '/about/structure/departments/dpcs',
//     },
//     {
//       title: 'departments.dlic',
//       route: '/about/structure/departments/dlic',
//     },
//     {
//       title: 'departments.dilwp',
//       route: '/about/structure/departments/dilwp',
//     },
//     {
//       title: 'departments.dbll',
//       route: '/about/structure/departments/dbll',
//     },
//     {
//       title: 'departments.dthsl',
//       route: '/about/structure/departments/dthsl',
//     },
//     {
//       title: 'departments.dcl',
//       route: '/about/structure/departments/dcl',
//     },
//     {
//       title: 'departments.dcelc',
//       route: '/about/structure/departments/dcelc',
//     },
//     {
//       title: 'departments.dcpps',
//       route: '/about/structure/departments/dcpps',
//     },
//     {
//       title: 'departments.dpssh',
//       route: '/about/structure/departments/dpssh',
//     },
//     {
//       title: 'departments.demc',
//       route: '/about/structure/departments/demc',
//     },
//     {
//       title: 'departments.slc',
//       route: '/about/structure/departments/slc',
//     },
//   ],
// }

const StructuralUnit: React.FC<DepartmentsProps> = ({ links, pageName, pageTitle, image }) => {
  const serializedLinks = links?.map((item) => ({
    name: item.title,
    route: `/about/structure/departments/department/${item.id}`,
  }))

  return (
    <div className="about-page">
      <Head>
        <title>{pageName}</title>
      </Head>
      <MobileMenu links={serializedLinks} />
      <div className="main">
        <h2>{pageTitle}</h2>
        <img className="mainImage" src={image} alt="" />
        <div className="body">
          <Sidebar links={serializedLinks} />
          <div className="content">
            <h3>TITLE</h3>
          </div>
        </div>
      </div>
      {/* <News /> */}
    </div>
  )
}

export default StructuralUnit
