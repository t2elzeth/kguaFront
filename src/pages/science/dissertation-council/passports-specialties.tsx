import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const PassportsSpecialties: React.FC = () => {
  const { t } = useTranslation('science')
  return (
    <AboutPage
      t={t}
      pageName="Паспорта специальностей"
      pageTitle="Паспорта специальностей"
      image="/images/documents.png"
    >
      <h2>Паспорта специальностей</h2>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default PassportsSpecialties
