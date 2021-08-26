import PartnerCard from '@src/components/PartnerCard'
import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const PartnerOrganizations: React.FC = () => {
  const { t } = useTranslation('international-cooperation')
  const partners = t('partners', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      pageName={t('electronic_queue')}
      pageTitle={t('electronic_queue')}
      image="/images/documents.png"
    >
      {Array.from(partners).map((item: any, index: number) => (
        <PartnerCard key={index} title={item.name} img={item.img} />
      ))}
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'international-cooperation'])),
  },
})

export default PartnerOrganizations
