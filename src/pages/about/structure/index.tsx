import { WithoutSideBar } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const categories = [
  {
    title: 'Ректорат',
    img: '/images/students-1.svg',
    route: '/about/structure/administration',
  },
  {
    title: 'Учебные подразделения ',
    img: '/images/students-2.svg',
    route: '/structure',
  },
  {
    title: 'Структурные подразделения',
    img: '/images/students-3.svg',
    route: '/about/structure/structural-units',
  },
  {
    title: 'Кафедры',
    img: '/images/students-4.svg',
    route: '/about/structure/departments',
  },
]

const IndexPage: React.FC = () => {
  const { t } = useTranslation('about')
  const categories = t('sidebar_list', { returnObjects: true })
  console.log('categories: ', categories)
  return (
    <WithoutSideBar pageName="Структура университета">
      <img src="/images/incoming-title-2.png" alt="" />
      <h2>Структура университета</h2>
      <p>
        Кыргызский государственный юридический университет (КГЮА) является государственным высшим
        профессиональным учебным заведением, выполняющим общегосударственные задачи, центром
        подготовки кадров в системе высшего образования и послевузовской подготовки кадров в сфере
        юриспруденции, экономики, управления и информационных технологий.
      </p>
      <div className="categories">
        {categories[1].subLinks?.map((item, index) => (
          <Link href={item.route} key={index}>
            <a>
              <img src={item.img} alt="" />
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
