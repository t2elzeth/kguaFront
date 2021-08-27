import { WithoutSideBar } from '../../templates'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const Science = () => {
  const { t } = useTranslation('science')
  const categories = t('sidebar_list', { returnObjects: true })
  return (
    <WithoutSideBar pageName={t('title')}>
      <div className="slider">
        <img alt="science" src="/images/science-title-1.png" />
        <div>
          <h4>{t('title')}</h4>
          <p>{t('description')}</p>
        </div>
      </div>
      <h2>{t('title')}</h2>
      <p>В настоящее время в составе КГЮА действуют следующие институты:</p>
      <div className="categories">
        {Array.from(categories).map((item: any) => (
          <Link key={item.route} href={item.route}>
            <a>
              <img alt={item.name} src={item.img} />
              <p>{item.name}</p>
            </a>
          </Link>
        ))}
      </div>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default Science
