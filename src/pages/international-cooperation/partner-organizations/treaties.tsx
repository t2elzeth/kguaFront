import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const Treaties: React.FC = () => {
  const { t } = useTranslation('international-cooperation')

  const documents = [
    {
      title: 'Договора и Международное сотрудничество',
      document: '/documents/Договора и Международное сотрудничество.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('treaties.title')}
      pageTitle={t('treaties.title')}
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
    ...(await serverSideTranslations(locale, ['common', 'international-cooperation'])),
  },
})

export default Treaties
