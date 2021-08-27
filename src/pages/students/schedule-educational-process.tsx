import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const ScheduleEducationalProcess: React.FC = () => {
  const { t } = useTranslation('students')

  const documents = [
    {
      title: 'График-учебного-процесса',
      document: '/documents/График-учебного-процесса.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('shedule.title')}
      pageTitle={t('shedule.title')}
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

export default ScheduleEducationalProcess
