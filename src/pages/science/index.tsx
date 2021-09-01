import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { WithoutSideBar } from '@src/templates'

const Science = () => {
  const { t } = useTranslation('science')

  const categories = t('sidebar_list', { returnObjects: true })

  const [isHovered, setIsHovered] = useState({})

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
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default Science
