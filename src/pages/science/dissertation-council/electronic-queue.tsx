import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const ElectronicQueue: React.FC = () => {
  const { t } = useTranslation('science')

  const documents = [
    {
      title: 'Электронная очередь',
      document: '/documents/electronic_queue.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('electronic_queue')}
      pageTitle={t('electronic_queue')}
      image="/images/documents.png"
    >
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

export default ElectronicQueue
