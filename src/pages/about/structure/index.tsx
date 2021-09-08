import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Slide } from '@material-ui/core'

import { WithoutSideBar } from '@src/templates'

const IndexPage: React.FC = () => {
  const { t } = useTranslation('about')
  const categories = Array.from(t('sidebar_list', { returnObjects: true }))

  const strucutureCategories = categories.find((item: any) => item.route.includes('structure'))

  const [isHovered, setIsHovered] = useState({})

  return (
    <WithoutSideBar pageName={t('structure.title')}>
      <Slide in direction="down" timeout={750}>
        <div style={{ textAlign: 'center' }}>
          <Image
            width={1400}
            height={700}
            src="/images/about/structure/structure-page-hero.png"
            alt="structure-page-hero"
          />
        </div>
      </Slide>
      <h2>{t('structure.title')}</h2>
      <p>
        Кыргызский государственный юридический университет (КГЮА) является государственным высшим
        профессиональным учебным заведением, выполняющим общегосударственные задачи, центром
        подготовки кадров в системе высшего образования и послевузовской подготовки кадров в сфере
        юриспруденции, экономики, управления и информационных технологий.
      </p>
      <div className="categories">
        {Object(strucutureCategories).subLinks?.map((item, index) => (
          <Link href={item.route} key={index}>
            <a
              onMouseEnter={() => setIsHovered({ [index]: true })}
              onMouseLeave={() => setIsHovered({ [index]: false })}
            >
              <img src={isHovered[index] ? item.img_hov : item.img} alt="" />
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
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default IndexPage
