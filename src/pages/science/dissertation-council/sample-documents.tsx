import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const SampleDocuments: React.FC = () => {
  const { t } = useTranslation('science')

  const documents = [
    {
      title: 'Форма акта внедрения',
      document: '/documents/sample-documents/Форма акта внедрения.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('sample_documents')}
      pageTitle={t('sample_documents')}
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

export default SampleDocuments
