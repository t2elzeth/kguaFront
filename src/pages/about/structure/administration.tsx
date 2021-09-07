import { AboutPage } from '../../../templates'
// import { Collapse } from '@Components'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import fetchData from '@src/services/fetchData'
import { Collapse } from '@src/components'
import Loader from '@src/components/Loader'

// const staff = [
//   {
//     name: 'Рысмендеев Бактыбек Дженишбекович',
//     position: 'Ректор Кыргызского государственного юридического университета',
//     experience: '22 года',
//     pedagogicalExperience: '22 года',
//     content: `1994-1999 Кыргызский государственный национальный университет факультет: юридический специальность: юриспруденция
//         Диплом от 18 мая 1999 года –№1657
//         2007 - Кандидат юридических наук.Специальность:
//         12.00.02 – конституционное право; муниципальное право`,
//     image: '/images/collapse.png',
//   },
//   {
//     name: 'Рысмендеев Бактыбек Дженишбекович',
//     position: 'Ректор Кыргызского государственного юридического университета',
//     experience: '22 года',
//     pedagogicalExperience: '22 года',
//     content: `1994-1999 Кыргызский государственный национальный университет факультет: юридический специальность: юриспруденция
//         Диплом от 18 мая 1999 года –№1657
//         2007 - Кандидат юридических наук.Специальность:
//         12.00.02 – конституционное право; муниципальное право`,
//     image: '/images/collapse.png',
//   },
//   {
//     name: 'Рысмендеев Бактыбек Дженишбекович',
//     position: 'Ректор Кыргызского государственного юридического университета',
//     experience: '22 года',
//     pedagogicalExperience: '22 года',
//     content: `1994-1999 Кыргызский государственный национальный университет факультет: юридический специальность: юриспруденция
//         Диплом от 18 мая 1999 года –№1657
//         2007 - Кандидат юридических наук.Специальность:
//         12.00.02 – конституционное право; муниципальное право`,
//     image: '/images/collapse.png',
//   },
// ]
const AdministrationPage = (props) => {
  const { t } = useTranslation('about')

  if (!props.data) {
    return <Loader />
  }
  return (
    <AboutPage
      t={t}
      pageName={t('structure.administration.title')}
      pageTitle={t('structure.administration.title')}
      image="/images/symbolism.png"
    >
      <p>
        Свою миссию КГЮА видит в укреплении позиции университета как ведущего, социально
        ориентированного вуза в области образования и развитие его как центра фундаментальных
        научных и экспертно-аналитических исследований в области права.
      </p>
      <Collapse items={props.data} />
    </AboutPage>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetchData('staff', { lang: context.locale, position: 'rector' })
  return {
    props: {
      data: res,
      ...(await serverSideTranslations(context.locale, ['common', 'about'])),
    },
  }
}
export default AdministrationPage
