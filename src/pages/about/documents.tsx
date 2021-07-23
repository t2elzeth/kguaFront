import { AboutPage } from '../../templates'
import { Download } from '@Components'

export type DocumentsPageProps = {}
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

const DocumentsPage: React.FC<DocumentsPageProps> = () => {
  return (
    <AboutPage pageName="Документы" pageTitle='Документы' image='/images/documents.png'>
      {documents.map((item) => (
        <Download document={item} />
      ))}
    </AboutPage>
  )
}

export default DocumentsPage