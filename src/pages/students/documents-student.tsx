import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const DocumentsStudent: React.FC = () => {
  const { t } = useTranslation('students')

  const documents = [
    {
      title: 'Этнический кодекс работников и обучающихся КГЮА',
      document: '/documents/Этнический кодекс работников и обучающихся КГЮА.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('documents_student.title')}
      pageTitle={t('documents_student.title')}
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
    ...(await serverSideTranslations(locale, ['common', 'students'])),
  },
})

export default DocumentsStudent
