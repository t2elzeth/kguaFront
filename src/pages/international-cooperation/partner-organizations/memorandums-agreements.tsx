import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const MemorandumsAgreements: React.FC = () => {
  const { t } = useTranslation('international-cooperation')

  const documents = [
    {
      title: 'Меморандумы и соглашения',
      document: '/documents/Меморандумы и соглашения.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('memorandums.title')}
      pageTitle={t('memorandums.title')}
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

export default MemorandumsAgreements
