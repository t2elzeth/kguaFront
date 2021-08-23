import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const LifeOfKSLA: React.FC = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage t={t} pageName="Жизнь КГЮА" pageTitle="Жизнь КГЮА" image="/images/documents.png">
      ЖИЗНЬ КГЮА
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default LifeOfKSLA
