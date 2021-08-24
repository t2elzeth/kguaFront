import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const SpecialistPassports: React.FC = () => {
  const { t } = useTranslation('science')

  const documents = [
    {
      title: t('specialist_passports'),
      document: '/documents/Паспорта_специалистов.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('specialist_passports')}
      pageTitle={t('specialist_passports')}
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
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default SpecialistPassports
