import { Download } from '@src/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const LegalClinic: React.FC = () => {
  const { t } = useTranslation('students')

  const list1 = t('legal_clinic.list_1', { returnObjects: true })
  const list2 = t('legal_clinic.list_2', { returnObjects: true })

  const docPosition = {
    title: 'ПОЛОЖЕНИЕ О юридической клинике',
    document: '/documents/Положение о юридической клинике.docx.pdf',
  }

  return (
    <AboutPage
      t={t}
      pageName={t('legal_clinic.title')}
      pageTitle={t('legal_clinic.title')}
      image="/images/students-self-1.png"
    >
      <p>{t('legal_clinic.desc_1')}</p>
      <ul>
        {Array.from(list1).map((item: any, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{t('legal_clinic.title_2')}</p>
      <ul>
        {Array.from(list2).map((item: any, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h6>{t('legal_clinic.desc_3')}</h6>
      <h6>{t('legal_clinic.desc_4')}</h6>
      <h5>{t('legal_clinic.work')}</h5>
      <h5>{t('legal_clinic.address')}</h5>

      <Download document={docPosition} />
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'students'])),
  },
})

export default LegalClinic
