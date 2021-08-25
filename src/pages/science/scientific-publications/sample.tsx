import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'
import { Download } from '@src/components'

const Sample: React.FC = () => {
  const { t } = useTranslation('science')

  const documents = [
    {
      title: 'Правила оформления научных статей для публикации в журнале КГЮА',
      document: '/documents/Правила оформления научных статей для публикации в журнале КГЮА.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('sample.title')}
      pageTitle={t('sample.title')}
      image="/images/vestnik.png"
    >
      <section style={{ marginBottom: 50 }}>
        {documents.map((item) => (
          <Download key={item.title} document={item} />
        ))}
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default Sample
