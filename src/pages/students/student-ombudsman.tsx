import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const StudentOmbudsman: React.FC = () => {
  const { t } = useTranslation('students')

  const list1 = t('ombudsman.list_1', { returnObjects: true })
  return (
    <AboutPage
      t={t}
      pageName={t('ombudsman.title')}
      pageTitle={t('ombudsman.title')}
      image="/images/students-self-1.png"
    >
      <p>{t('ombudsman.desc_1')}</p>
      <p>{t('ombudsman.desc_2')}</p>
      <p>{t('ombudsman.title_1')}</p>
      <ul>
        {Array.from(list1).map((item: any, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'students'])),
  },
})

export default StudentOmbudsman
