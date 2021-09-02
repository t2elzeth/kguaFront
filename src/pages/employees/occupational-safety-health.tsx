import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const OSH: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('employees')

  const list = t('sidebar_list', { returnObjects: true })
  const currentData = Array.from(list).find((item: any) => item.route === router.pathname)

  return (
    <AboutPage
      t={t}
      pageName={Object(currentData).name}
      pageTitle={Object(currentData).name}
      image="/images/employees/employees-3-hero.png"
    >
      <p>{Object(currentData)?.description}</p>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'employees'])),
  },
})

export default OSH
