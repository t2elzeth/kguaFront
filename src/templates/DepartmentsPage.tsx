import { Sidebar, MobileMenu, CardHeadDepartment, CardTeacher } from '@Components'
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

const Departments: React.FC<DepartmentsProps> = ({
  links,
  pageName,
  pageTitle,
  image,
  currentDepartments,
}) => {
  const serializedLinks = links.map((item) => ({
    name: item.title,
    route: item.route,
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
            <h3>Информация о кафедре</h3>
            <div style={{ marginBottom: 50 }}>
              <CardHeadDepartment
                head_teacher={currentDepartments.head_teacher}
                image={currentDepartments.image}
                url={currentDepartments.url}
                address={currentDepartments.address}
                contacts={currentDepartments.contacts}
                email={currentDepartments.email}
              />
            </div>
            <p>{currentDepartments.description}</p>
            {currentDepartments?.info_of_staff && (
              <>
                <h3>Информация о ППС</h3>
                <p>{currentDepartments.info_of_staff}</p>
              </>
            )}

            <h3>Состав ППС кафедры</h3>
            {currentDepartments.teachers.map((teacher) => (
              <CardTeacher
                key={teacher.name}
                image={teacher.image}
                name={teacher.name}
                position={teacher.position}
              />
            ))}
            {currentDepartments?.task_of_department && (
              <>
                <h3 style={{ marginTop: 10 }}>Задачи кафедры</h3>
                <ul>
                  {currentDepartments.task_of_department.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </>
            )}
            {currentDepartments?.courses_and_preparation && (
              <>
                <h3 style={{ marginTop: 10 }}>Задачи кафедры</h3>
                <ul>
                  {currentDepartments.courses_and_preparation.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </>
            )}
            <h3>Деятельность кафедры</h3>
            <p>{currentDepartments.department_activities}</p>
            <h3>Награды</h3>
            <p>{currentDepartments.awards}</p>
          </div>
        </div>
      </div>
      {/* <News /> */}
    </div>
  )
}

export default Departments
