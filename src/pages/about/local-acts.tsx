import { AboutPage } from '../../templates'
import { Download } from '@Components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const document = {
  title: 'Локальные-нормативные акты',
  document: 'https://do-portal.ksla.kg/?page_id=7574',
}

const LocalActsPage: React.FC = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage
      t={t}
      pageName={t('local_acts.title')}
      pageTitle={t('local_acts.title')}
      image="/images/documents.png"
    >
      <Download document={document} />
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default LocalActsPage
