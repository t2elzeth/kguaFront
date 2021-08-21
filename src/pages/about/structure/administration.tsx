import { AboutPage } from '../../../templates'
import { Collapse } from '@Components'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const staff = [
  {
    name: 'Рысмендеев Бактыбек Дженишбекович',
    position: 'Ректор Кыргызского государственного юридического университета',
    experience: '22 года',
    pedagogicalExperience: '22 года',
    content: `1994-1999 Кыргызский государственный национальный университет факультет: юридический специальность: юриспруденция
        Диплом от 18 мая 1999 года –№1657
        2007 - Кандидат юридических наук.Специальность:
        12.00.02 – конституционное право; муниципальное право`,
    image: '/images/collapse.png',
  },
  {
    name: 'Рысмендеев Бактыбек Дженишбекович',
    position: 'Ректор Кыргызского государственного юридического университета',
    experience: '22 года',
    pedagogicalExperience: '22 года',
    content: `1994-1999 Кыргызский государственный национальный университет факультет: юридический специальность: юриспруденция
        Диплом от 18 мая 1999 года –№1657
        2007 - Кандидат юридических наук.Специальность:
        12.00.02 – конституционное право; муниципальное право`,
    image: '/images/collapse.png',
  },
  {
    name: 'Рысмендеев Бактыбек Дженишбекович',
    position: 'Ректор Кыргызского государственного юридического университета',
    experience: '22 года',
    pedagogicalExperience: '22 года',
    content: `1994-1999 Кыргызский государственный национальный университет факультет: юридический специальность: юриспруденция
        Диплом от 18 мая 1999 года –№1657
        2007 - Кандидат юридических наук.Специальность:
        12.00.02 – конституционное право; муниципальное право`,
    image: '/images/collapse.png',
  },
]
const AdministrationPage = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage t={t} pageName="Ректорат" pageTitle="Ректорат" image="/images/symbolism.png">
      <p>
        Свою миссию КГЮА видит в укреплении позиции университета как ведущего, социально
        ориентированного вуза в области образования и развитие его как центра фундаментальных
        научных и экспертно-аналитических исследований в области права.
      </p>
      <Collapse items={staff} />
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})
export default AdministrationPage
