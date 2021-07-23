import { StructurePage } from '../../../templates'
import { Collapse } from '@Components'

const staff = [
  {
    position: 'Ректор Кыргызского государственного юридического университета',
    name: 'Рысмендеев Бактыбек Дженишбекович',

    experience: '22 года',
    content: `1994-1999 Кыргызский государственный национальный университет факультет: юридический специальность: юриспруденция
        Диплом от 18 мая 1999 года –№1657
        2007 - Кандидат юридических наук.Специальность:
        12.00.02 – конституционное право; муниципальное право`,
    image: '/images/collapse.png',
  },
]
const AdministrationPage = () => {
  return (
    <StructurePage pageName="Ректорат" pageTitle="Ректорат" image="/images/symbolism.png">
      <p>
        Свою миссию КГЮА видит в укреплении позиции университета как ведущего, социально
        ориентированного вуза в области образования и развитие его как центра фундаментальных
        научных и экспертно-аналитических исследований в области права.
      </p>
      <Collapse items={staff} />
    </StructurePage>
  )
}
export default AdministrationPage
