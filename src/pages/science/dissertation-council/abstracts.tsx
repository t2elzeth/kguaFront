import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const Abstracts: React.FC = () => {
  const { t } = useTranslation('science')
  return (
    <AboutPage t={t} pageName="Авторефераты" pageTitle="Авторефераты" image="/images/documents.png">
      <h2>Авторефераты</h2>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default Abstracts
