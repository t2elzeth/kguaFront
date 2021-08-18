import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const ElectronicResources: React.FC = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage
      t={t}
      pageName="Electronic Resources"
      pageTitle="Electronic Resources"
      image="/images/documents.png"
    >
      Electronic Resources
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default ElectronicResources
