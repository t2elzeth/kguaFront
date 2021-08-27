import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '../../templates'

const GraduatePage: React.FC = () => {
  const { t } = useTranslation('incoming')
  const router = useRouter()

  const list = t('sidebar_list', { returnObjects: true })
  const list1 = t('graduate.list_1', { returnObjects: true })
  const list2 = t('graduate.list_2', { returnObjects: true })
  const list3 = t('graduate.list_3', { returnObjects: true })
  const currentRoute = Array.from(list).find((item: any) => item.route === router.pathname)

  return (
    <AboutPage
      t={t}
      pageName={Object(currentRoute).name}
      pageTitle={Object(currentRoute).name}
      image="/images/incoming-title-2.png"
    >
      <p>{t('graduate.desc_1')}</p>
      <p>{t('graduate.desc_2')}</p>
      <h5>{t('graduate.title_3')}</h5>
      <p>{t('graduate.desc_3')}</p>
      <p>{t('graduate.desc_4')}</p>
      <p>{t('graduate.desc_5')}</p>
      <ul>
        {Array.from(list1).map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h5>{t('graduate.title_4')}</h5>
      <ul>
        {Array.from(list2).map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h5>{t('graduate.title_5')}</h5>
      <ul>
        {Array.from(list3).map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'incoming'])),
  },
})

export default GraduatePage
