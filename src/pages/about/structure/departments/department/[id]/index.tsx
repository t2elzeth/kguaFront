import { useRouter, withRouter } from 'next/router'

import { DepartmentsPage } from '@src/templates'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Department = () => {
  const router = useRouter()
  const { t } = useTranslation('about')
  const departmentsList = t('structure.listDepartments', { returnObjects: true })

  const currentDepartments = Array.from(departmentsList).find(
    (item: any) => item.route === router.pathname
  )

  return (
    <div>asdasdadsda</div>
    // <DepartmentsPage
    //   links={departmentsList}
    //   currentDepartments={currentDepartments}
    //   pageName={Object(currentDepartments).title}
    //   pageTitle={Object(currentDepartments).title}
    //   image="/images/symbolism.png"
    // />
  )
}

// pages/blog/[slug].js
export async function getStaticPaths() {
  return {
    paths: ['/about/structure/departments/department/[id]'],
    fallback: true,
  }
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default withRouter(Department)
