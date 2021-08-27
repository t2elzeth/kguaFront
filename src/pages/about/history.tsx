import { AboutPage } from '../../templates'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const History: React.FC = () => {
  const { t } = useTranslation('about')

  return (
    <AboutPage
      t={t}
      pageName={t('history.title')}
      pageTitle={t('history.title')}
      image="/images/mission-1.png"
    >
      <h5>{t('history.title_2')}</h5>
      <p>{t('history.desc_1')}</p>
      <p>{t('history.desc_2')}</p>
      <p>{t('history.desc_3')}</p>
      <p>{t('history.desc_4')}</p>
    </AboutPage>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})
export default History
