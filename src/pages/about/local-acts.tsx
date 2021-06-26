import { AboutPage } from '../../templetes'
import { Download } from '@Components'

export type LocalActsPageProps = {}
const documents = [
  {
    title: "Отзыв ведущей организации на диссертацию Джумалиева Д.С.",
    src: ""
  },
  {
    title: "Отзыв ведущей организации на диссертацию Джумалиева Д.С.",
    src: ""
  },
  {
    title: "Отзыв ведущей организации на диссертацию Джумалиева Д.С.",
    src: ""
  },
  {
    title: "Отзыв ведущей организации на диссертацию Джумалиева Д.С.",
    src: ""
  },
  {
    title: "Отзыв ведущей организации на диссертацию Джумалиева Д.С.",
    src: ""
  },
  {
    title: "Отзыв ведущей организации на диссертацию Джумалиева Д.С.",
    src: ""
  },
  {
    title: "Отзыв ведущей организации на диссертацию Джумалиева Д.С.",
    src: ""
  }
]

const LocalActsPage: React.FC<LocalActsPageProps> = () => {
  return (
    <AboutPage pageName="Документы" pageTitle='Документы' image='/images/first-section.png'>
      {documents.map((item) => (
        <Download document={item} />
      ))}
    </AboutPage>
  )
}

export default LocalActsPage