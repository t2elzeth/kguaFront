import { Download } from '@src/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const TaxCustomsClinic: React.FC = () => {
  const { t } = useTranslation('students')

  const list1 = t('tax.list_1', { returnObjects: true })
  const list2 = t('tax.list_2', { returnObjects: true })
  const list3 = t('tax.list_3', { returnObjects: true })

  const docPosition = {
    title: 'Положение О Налоговой клинике.docx',
    document: '/documents/Положени О Налоговой клинике.docx.pdf',
  }

  return (
    <AboutPage
      t={t}
      pageName={t('tax.title')}
      pageTitle={t('tax.title')}
      image="/images/news-section-3.png"
    >
      <p>{t('tax.desc_1')}</p>
      <p>{t('tax.title_1')}</p>
      <ul>
        {Array.from(list1).map((item: any, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{t('tax.desc_2')}</p>
      <p>{t('tax.desc_3')}</p>
      <p>{t('tax.desc_4')}</p>

      <p>{t('tax.title_2')}</p>
      <ul>
        {Array.from(list2).map((item: any, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>{t('tax.title_3')}</p>
      <ul>
        {Array.from(list3).map((item: any, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Download document={docPosition} />
      <h6>{t('tax.desc_5')}</h6>
      <h6>{t('tax.desc_6')}</h6>
      <h5>{t('tax.work')}</h5>
      <h5>{t('tax.address')}</h5>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'students'])),
  },
})

export default TaxCustomsClinic
