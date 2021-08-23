import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

export type ScheduleEducationalProcessProps = {}

const ScheduleEducationalProcess: React.FC<ScheduleEducationalProcessProps> = () => {
  const { t } = useTranslation('students')
  return (
    <AboutPage
      t={t}
      pageName="Schedule_educational_process"
      pageTitle="Schedule educational process"
      image="/images/studentsTitleImg.png"
    >
      EDUCATIONAL
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'students'])),
  },
})

export default ScheduleEducationalProcess
