import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'
import {
  BASIC_JURISPRUDENCE_LINKS,
  GOVERNMENT_LINKS,
  IT_LINKS,
  REGULATORY_FRAMEWORK_LINKS,
  TEXTBOOKS_BY_DISCIPLINE_LINKS,
} from '@src/common/constants'

const ElectronicResources: React.FC = () => {
  const { t } = useTranslation('about')

  return (
    <AboutPage
      t={t}
      pageName={t('electronic_resources.title')}
      pageTitle={t('electronic_resources.title')}
      image="/images/documents.png"
    >
      <h4>{t('electronic_resources.title_1')}</h4>
      {IT_LINKS.map((item) => (
        <Download key={item.document} document={item} />
      ))}
      <h4>{t('electronic_resources.title_2')}</h4>
      {GOVERNMENT_LINKS.map((item) => (
        <Download key={item.document} document={item} />
      ))}
      <h4>{t('electronic_resources.title_3')}</h4>
      {REGULATORY_FRAMEWORK_LINKS.map((item) => (
        <Download key={item.document} document={item} />
      ))}
      <h4>{t('electronic_resources.title_4')}</h4>
      {BASIC_JURISPRUDENCE_LINKS.map((item) => (
        <Download key={item.document} document={item} />
      ))}
      <h4>{t('electronic_resources.title_5')}</h4>
      {TEXTBOOKS_BY_DISCIPLINE_LINKS.map((item) => (
        <Download key={item.document} document={item} />
      ))}

      <p>
        Образовательный портал КГЮА в электронной библиотеке в разделе IT-академия свыше 500 книг по
        разным дисциплинам.
      </p>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default ElectronicResources
