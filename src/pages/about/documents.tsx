import { AboutPage } from '../../templates'
import { Download } from '@Components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const documents = [
  {
    title: 'Сертификат Профессионального лицея № 99',
    document: '/documents/Сертификат Профессионального лицея № 99.pdf',
  },
  {
    title: 'Сертификат КГЮА',
    document: '/documents/Сертификат КГЮА.pdf',
  },
  {
    title: 'Сертификат Иссык-Кульского юридического института',
    document: '/documents/Сертификат Иссык-Кульского юридического института.pdf',
  },
  {
    title: 'лицензия Иссык-кульского юридического института',
    document: '/documents/лицензия Иссык-кульского юридического института.pdf',
  },
  {
    title: 'Лицензии Профессионального лицея № 99',
    document: '/documents/Лицензии Профессионального лицея № 99.pdf',
  },
  {
    title: 'Лицензии КГЮА',
    document: '/documents/Лицензии КГЮА.pdf',
  },
]

const DocumentsPage: React.FC = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage t={t} pageName="Документы" pageTitle="Документы" image="/images/documents.png">
      {documents.map((item) => (
        <Download key={item.title} document={item} />
      ))}
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default DocumentsPage
