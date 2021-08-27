import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'

const ScientificPublications: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('science')

  const list = t('sidebar_list', { returnObjects: true })
  const currentRoute = Array.from(list).find((item: any) => item.route === router.pathname)
  return (
    <AboutPage
      t={t}
      pageName={Object(currentRoute).name}
      pageTitle={Object(currentRoute).name}
      image="/images/vestnik.png"
    >
      <section style={{ marginBottom: 50 }}>
        <p>{t('scientific_publications.desc_1')}</p>
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default ScientificPublications
