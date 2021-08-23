import { AboutPage } from '../../templates'
import { Download } from '@Components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const documents = [
  {
    title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
    src: '',
  },
  {
    title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
    src: '',
  },
  {
    title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
    src: '',
  },
  {
    title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
    src: '',
  },
  {
    title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
    src: '',
  },
  {
    title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
    src: '',
  },
  {
    title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
    src: '',
  },
]

const DocumentsPage: React.FC = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage t={t} pageName="Документы" pageTitle="Документы" image="/images/documents.png">
      {documents.map((item) => (
        <Download key={item.title} document={item} />
      ))}
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default DocumentsPage
