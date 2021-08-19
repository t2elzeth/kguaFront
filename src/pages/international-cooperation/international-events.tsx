import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { WithoutSideBar } from '../../templates'

const InternationalEvents: React.FC = () => {
  const { t } = useTranslation('international-cooperation')
  return <WithoutSideBar pageName={t('international_events')}>INTERNATIONAL EVENTS</WithoutSideBar>
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'international-cooperation'])),
  },
})

export default InternationalEvents
