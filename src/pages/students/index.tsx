import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { WithoutSideBar } from '../../templates'

const Students = () => {
  const { t } = useTranslation('students')
  const categories = t('sidebar_list', { returnObjects: true })
  const list1 = t('list_1', { returnObjects: true })

  return (
    <WithoutSideBar pageName="Студентам">
      <div className="students-page">
        <div className="slider">
          <img src="/images/financial.png" alt="" />
          <div>
            <h4>{t('title')}</h4>
            <p>{t('description')}</p>
            <ul>
              {Array.from(list1).map((item: any, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{t('desc_2')}</p>
          </div>
        </div>
        <h2>Студентам</h2>
        <p>В настоящее время в составе КГЮА действуют следующие институты:</p>
        <div className="categories">
          {Array.from(categories).map((item: any, index) => (
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
    ...(await serverSideTranslations(locale, ['common', 'students'])),
  },
})

export default Students
