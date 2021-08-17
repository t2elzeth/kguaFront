import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export type ElectronicResourcesProps = {}

const ElectronicResources: React.FC<ElectronicResourcesProps> = () => {
  return (
    <AboutPage
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
