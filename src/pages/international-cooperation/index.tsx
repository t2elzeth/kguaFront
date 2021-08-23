import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { WithoutSideBar } from '../../templates'

const InternationalCooperation = () => {
  const { t } = useTranslation('international-cooperation')
  const categories = t('sidebar_list', { returnObjects: true })

  return (
    <WithoutSideBar pageName={t('title')}>
      <div className="students-page">
        <div className="slider">
          <img src="/images/financial.png" alt="" />
          <div>
            <h4>{t('title')}</h4>
            <p>{t('description')}</p>
          </div>
        </div>
        <h2>{t('title')}</h2>
        <p>В настоящее время в составе КГЮА действуют следующие институты:</p>
        <div className="categories">
          {categories.map((item, index) => (
            <Link key={index} href={item.route}>
              <div>
                <img src={item.img} alt="" />
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
    ...(await serverSideTranslations(locale, ['common', 'international-cooperation'])),
  },
})

export default InternationalCooperation
