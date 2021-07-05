import { AboutPage } from '../../templates'
import { Download } from '@Components'

export type LocalActsPageProps = {}
const documents = [
  {
    title: "Лицензии IT-академии",
    src: ""
  },
  {
    title: "Положения",
    src: ""
  },
  {
    title: "Временный порядок обучения с применением ДОТ при реализации ОП в КГЮА",
    src: ""
  },
  {
    title: "Отзыв ведущей организации на диссертацию Джумалиева Д.С.",
    src: ""
  },
  {
    title: "Временный регламент проведения итогового контроля зачетно-экзаменационной сессии 2020-2021 уч.г. по дисциплинам учебного плана всех направлений и профилей",
    src: ""
  },
  {
    title: "Временный регламент проведения Итоговой гос-ой аттестации с применением ДОТ, обучающихся в КГЮА по ОП бак, спец, маг",
    src: ""
  },
  {
    title: "Инструкция по проведению итогового контроля зачетно-экзаменационной сессии 2020-2021 уч.г.",
    src: ""
  }
]

const LocalActsPage: React.FC<LocalActsPageProps> = () => {
  return (
    <AboutPage pageName="Документы" pageTitle='Локальные-нормативные акты' image='/images/documents.png'>
      {documents.map((item) => (
        <Download document={item} />
      ))}
    </AboutPage>
  )
}

export default LocalActsPage