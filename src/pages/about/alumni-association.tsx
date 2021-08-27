import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import WithoutSideBar from '../../templates/WithoutSideBar'

const IndexPage: React.FC = () => {
  const { t } = useTranslation('about')

  const list1 = t('alumni.list_1', { returnObjects: true })
  const list2 = t('alumni.list_2', { returnObjects: true })
  const list3 = t('alumni.list_3', { returnObjects: true })

  return (
    <WithoutSideBar pageName={t('alumni.title')}>
      <img src="/images/incoming-title-2.png" alt="" />
      <h2>{t('alumni.title')}</h2>
      <p>{t('alumni.desc_1')}</p>
      <h2>{t('alumni.title_2')}</h2>
      <h4 style={{ marginTop: '32px' }}>{t('alumni.title_3')}</h4>
      <ul>
        {Array.from(list1).map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>{t('alumni.title_4')}</h2>
      <ul>
        {Array.from(list2).map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>{t('alumni.title_5')}</h2>
      <ul>
        {Array.from(list3).map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default IndexPage
