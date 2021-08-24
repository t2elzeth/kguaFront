import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const Ads: React.FC = () => {
  const { t } = useTranslation('science')

  const documents = [
    {
      title: 'Объявление о защите диссертации Исмаилбекова М.С.',
      document: '/documents/ads/Объявление о защите диссертации Исмаилбекова М.С..pdf',
    },
  ]

  return (
    <AboutPage t={t} pageName={t('ads')} pageTitle={t('ads')} image="/images/documents.png">
      {documents.map((item) => (
        <Download key={item.title} document={item} />
      ))}
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default Ads
