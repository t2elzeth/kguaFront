import { WithoutSideBar } from '../../templates'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const LifeOfKSLA = () => {
  const { t } = useTranslation('about')
  const categories = t('life_of_ksla.sidebar_list', { returnObjects: true })
  return (
    <WithoutSideBar pageName={t('life_of_ksla.title')}>
      <div className="slider">
        <img alt="life_of_ksla" src="/images/documents.png" />
        <div>
          <h4>{t('life_of_ksla.title')}</h4>
          <p>{t('life_of_ksla.description')}</p>
        </div>
      </div>
      <h2>{t('life_of_ksla.title')}</h2>
      <p>{t('life_of_ksla.desc_categories')}</p>
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
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default LifeOfKSLA
