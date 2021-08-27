import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const Reviews: React.FC = () => {
  const { t } = useTranslation('science')

  const documents = [
    {
      title: 'Арзыматова Э.Б.',
      document: '/documents/expert-opinions/Арзыматова Э.Б..pdf',
    },
    {
      title: 'Бакирова Н.Ж.',
      document: '/documents/expert-opinions/Бакирова Н.Ж..pdf',
    },
    {
      title: 'Джумалиев Д.С.',
      document: '/documents/expert-opinions/Джумалиев Д.С..pdf',
    },
    {
      title: 'Нуридинова А.Н.',
      document: '/documents/expert-opinions/Нуридинова А.Н..pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('expert_opinions')}
      pageTitle={t('expert_opinions')}
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

export default Reviews
