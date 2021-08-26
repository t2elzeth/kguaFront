import { News } from '@src/components'
import PartnerCard from '@src/components/PartnerCard'
import fetchData from '@src/services/fetchData'
import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { withRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const PartnerOrganizations: React.FC = ({ news }: any) => {
  const { t } = useTranslation('international-cooperation')
  const partners = t('partners', { returnObjects: true })

  return (
    <>
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
      <News news={news} />
    </>
  )
}

export const getStaticProps = async (context: any) => {
  const res = await fetchData('news')
  const news = Array.from(res).map((item: any) => {
    if (item[context.locale]) {
      return { ...item[context.locale] }
    }
  })
  return {
    props: {
      news,
      ...(await serverSideTranslations(context.locale, ['common', 'international-cooperation'])),
    },
  }
}

export default withRouter(PartnerOrganizations)
