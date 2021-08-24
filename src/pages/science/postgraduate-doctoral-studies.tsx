import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const PostgraduateDoctoralStudies: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('science')

  const list = t('sidebar_list', { returnObjects: true })
  const currentRoute = Array.from(list).find((item: any) => item.route === router.pathname)
  const listExams = t('postgraduate.list_1', { returnObjects: true })
  return (
    <AboutPage
      t={t}
      pageName={Object(currentRoute).name}
      pageTitle={Object(currentRoute).name}
      image="/images/science-title-2.png"
    >
      <section style={{ marginBottom: 50 }}>
        <h3>{t('postgraduate.title')}</h3>
        <p>{t('postgraduate.desc_1')}</p>
        <p>{t('postgraduate.desc_2')}</p>
        <h4>{t('postgraduate.title_2')}</h4>
        <p>{t('postgraduate.desc_3')}</p>
        <ul>
          {Array.from(listExams).map((item: any, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: 50 }}>
        <h3>ДОКТОРАНТУРЫ</h3>
      </section>
      <section>
        <h3>ИНФОРМАЦИЯ О СОТРУДНИКАХ</h3>
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default PostgraduateDoctoralStudies
