import { WithoutSideBar } from '../../templates'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Slide } from '@material-ui/core'

const Employees = () => {
  const { t } = useTranslation('employees')
  const categories = t('sidebar_list', { returnObjects: true })

  const [isHovered, setIsHovered] = useState({})

  return (
    <WithoutSideBar pageName={t('title')}>
      <div className="students-page">
        <div className="slider">
          <Slide in direction="right" timeout={750}>
            <img alt="employees" src="/images/science-title-1.png" />
          </Slide>
          <Slide in direction="left" timeout={750}>
            <div>
              <h4>{t('title')}</h4>
              <p>{t('description')}</p>
            </div>
          </Slide>
        </div>
        <h2>{t('title')}</h2>
        <p>В настоящее время в составе КГЮА действуют следующие институты:</p>
        <div className="categories">
          {Array.from(categories).map((item: any, index: number) => (
            <Link key={item.route} href={item.route}>
              <a
                onMouseEnter={() => setIsHovered({ [index]: true })}
                onMouseLeave={() => setIsHovered({ [index]: false })}
              >
                <img alt={item.name} src={isHovered[index] ? item.img_hov : item.img} />
                <p>{item.name}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'employees'])),
  },
})

export default Employees
