import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const InfoMembers: React.FC = () => {
  const { t } = useTranslation('science')
  return (
    <AboutPage
      t={t}
      pageName="Сведения о членах диссертационного совета"
      pageTitle="Сведения о членах диссертационного совета"
      image="/images/documents.png"
    >
      <h2>Сведения о членах диссертационного совета</h2>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default InfoMembers
