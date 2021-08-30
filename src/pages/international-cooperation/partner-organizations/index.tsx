import PartnerCard from '@src/components/PartnerCard'
import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { withRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const PartnerOrganizations: React.FC = () => {
  const { t } = useTranslation('international-cooperation')
  const partners = t('partners', { returnObjects: true })

  return (
    <>
      <AboutPage
        t={t}
        pageName={t('partners.title')}
        pageTitle={t('partners.title')}
        image="/images/documents.png"
      >
        {Array.from(partners).map((item: any, index: number) => (
          <PartnerCard key={index} title={item.name} img={item.img} />
        ))}
      </AboutPage>
    </>
  )
}

export const getStaticProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'international-cooperation'])),
    },
  }
}

export default withRouter(PartnerOrganizations)
