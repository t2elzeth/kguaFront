import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const HIT: React.FC = () => {
  const { t } = useTranslation('about')

  return (
    <AboutPage t={t} pageName={t('title')} pageTitle={t('title')} image="/images/symbolism.png">
      HIT
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'training-units'])),
  },
})

export default HIT
