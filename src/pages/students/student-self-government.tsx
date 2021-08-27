import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const StudentSelfGovernment: React.FC = () => {
  const { t } = useTranslation('students')

  return (
    <AboutPage
      t={t}
      pageName={t('students_self.title')}
      pageTitle={t('students_self.title')}
      image="/images/students-self-1.png"
    >
      <p>{t('students_self.desc_1')}</p>
      <p>{t('students_self.desc_2')}</p>
      <p>{t('students_self.desc_3')}</p>
      <p>{t('students_self.desc_4')}</p>
      <p>{t('students_self.desc_5')}</p>
      <p>{t('students_self.desc_6')}</p>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'students'])),
  },
})

export default StudentSelfGovernment
