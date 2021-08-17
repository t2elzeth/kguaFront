import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export type LifeOfKSLAProps = {}

const LifeOfKSLA: React.FC<LifeOfKSLAProps> = () => {
  return (
    <AboutPage pageName="Жизнь КГЮА" pageTitle="Жизнь КГЮА" image="/images/documents.png">
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
