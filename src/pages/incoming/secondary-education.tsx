import { Download } from '@src/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '../../templates'

const SecondaryEducation: React.FC = () => {
  const { t } = useTranslation('incoming')

  const documents = [
    {
      title: 'Правила приема 2021-2022 КГЮА СПО кырг',
      document: '/documents/secondary-education/Правила приема 2021-2022 КГЮА СПО кырг.pdf',
    },
    {
      title: 'Правила приема 2021-2022 КГЮА СПО рус',
      document: '/documents/secondary-education/Правила приема 2021-2022 КГЮА СПО рус.pdf',
    },
    {
      title: 'среднее профессиональное образование',
      document: '/documents/secondary-education/среднее профессиональное образование.docx.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('secondary.title')}
      pageTitle={t('secondary.title')}
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

export default SecondaryEducation
