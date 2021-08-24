import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const HIT: React.FC = () => {
  const { t } = useTranslation('about')

  const list = t('awards.list', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      pageName={t('title')}
      pageTitle={t('title')}
      image="/images/symbolism.png"
    ></AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'training-units'])),
  },
})

export default HIT
