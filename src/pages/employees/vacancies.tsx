import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const Vacancies: React.FC = () => {
  const { t } = useTranslation('employees')
  const router = useRouter()
  const list = t('sidebar_list', { returnObjects: true })
  const currentData = [list].find((item: any) => item.route === router.pathname)
  console.log('currentData: ', currentData)
  return (
    <AboutPage
      t={t}
      pageName={Object(currentData).name}
      pageTitle={Object(currentData).name}
      image="/images/documents.png"
    >
      <p>{Object(currentData).description}</p>
      <h3>Вакансии</h3>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'employees'])),
  },
})

export default Vacancies
