import { useRouter, withRouter } from 'next/router'

import { DepartmentsPage } from '@src/templates'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Dafil = () => {
  const router = useRouter()
  const { t } = useTranslation('about')
  const departmentsList = t('structure.listDepartments', { returnObjects: true })

  const currentDepartments = Array.from(departmentsList).find(
    (item: any) => item.route === router.pathname
  )

  return (
    <DepartmentsPage
      links={departmentsList}
      currentDepartments={currentDepartments}
      pageName={Object(currentDepartments)?.title}
      pageTitle={Object(currentDepartments)?.title}
      image="/images/symbolism.png"
    />
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default withRouter(Dafil)
