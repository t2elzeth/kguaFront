import { Download } from '@src/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '../../templates'

const BachelorDegree: React.FC = () => {
  const { t } = useTranslation('incoming')

  const documents = [
    {
      title: 'Правила приема 2021-2022 КГЮА ВПО рус',
      document: '/documents/bachelor/Правила приема 2021-2022 КГЮА ВПО рус.pdf',
    },
  ]
  return (
    <AboutPage
      t={t}
      pageName={t('bachelor.title')}
      pageTitle={t('bachelor.title')}
      image="/images/incoming-title-2.png"
    >
      {documents.map((item) => (
        <Download key={item.title} document={item} />
      ))}
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'incoming'])),
  },
})

export default BachelorDegree
