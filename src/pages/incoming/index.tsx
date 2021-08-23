import { WithoutSideBar } from '../../templates'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation('incoming')
  const categories = t('sidebar_list', { returnObjects: true })
  return (
    <WithoutSideBar pageName="Поступающим">
      <div className="students-page">
        <div className="slider">
          <img alt="incoming" src="/images/incoming-title-1.png" />
          <div>
            <h4>{t('title')}</h4>
            <p>{t('description')}</p>
          </div>
        </div>
        <h2>{t('title')}</h2>
        <p>В настоящее время в составе КГЮА действуют следующие институты:</p>
        <div className="categories">
          {categories.map((item) => (
            <Link key={item.route} href={item.route}>
              <div>
                <img alt={item.name} src={item.img} />
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'incoming'])),
  },
})

export default IndexPage
