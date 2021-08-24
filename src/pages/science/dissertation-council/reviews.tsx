import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const Reviews: React.FC = () => {
  const { t } = useTranslation('science')

  const documents = [
    {
      title: 'Отзыв ведущей организации на диссертацию Аманагелдиева А.А.',
      document:
        '/documents/reviews/Отзыв ведущей организации на диссертацию Аманагелдиева А.А..pdf',
    },
    {
      title: 'Отзыв ведущей организации на диссертацию Арзыматовой Э.Б.',
      document: '/documents/reviews/Отзыв ведущей организации на диссертацию Арзыматовой Э.Б..pdf',
    },
    {
      title: 'Отзыв ведущей организации на диссертацию Асанабаева Е.Т.',
      document: '/documents/reviews/Отзыв ведущей организации на диссертацию Асанабаева Е.Т..pdf',
    },
    {
      title: 'Отзыв ведущей организации на диссертацию Аскарбекова Д.Э.',
      document: '/documents/reviews/Отзыв ведущей организации на диссертацию Аскарбекова Д.Э..pdf',
    },
    {
      title: 'Отзыв ведущей организации на диссертацию Бакировой Н.Дж.',
      document: '/documents/reviews/Отзыв ведущей организации на диссертацию Бакировой Н.Дж..pdf',
    },
    {
      title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
      document: '/documents/reviews/Отзыв ведущей организации на диссертацию Джумалиева Д.С..pdf',
    },
    {
      title: 'Отзыв ведущей организации на диссертацию Исмаилбекова М.С.',
      document: '/documents/reviews/Отзыв ведущей организации на диссертацию Исмаилбекова М.С..pdf',
    },
    {
      title: 'Отзыв ведущей организации на диссертацию Мырзабаева М.Т.',
      document: '/documents/reviews/Отзыв ведущей организации на диссертацию Мырзабаева М.Т..pdf',
    },
    {
      title: 'Отзыв ведущей организации на диссертацию Шыгаева А.А.',
      document: '/documents/reviews/Отзыв ведущей организации на диссертацию Шыгаева А.А..pdf',
    },
    {
      title: 'Отзыв оппонента на диссертацию Мырзабаева М.Т.',
      document: '/documents/reviews/Отзыв оппонента на диссертацию Мырзабаева М.Т..pdf',
    },
    {
      title: 'Отзыв оппонента на диссертацию Шыгаева А.А.',
      document: '/documents/reviews/Отзыв оппонента на диссертацию Шыгаева А.А..pdf',
    },
    {
      title: 'Отзыв официального оппонента на диссертацию Арзыматовой Э.Б.',
      document:
        '/documents/reviews/Отзыв официального оппонента на диссертацию Арзыматовой Э.Б..pdf',
    },
    {
      title: 'Отзыв официального оппонента на диссертацию Бакировой Н.Дж.',
      document:
        '/documents/reviews/Отзыв официального оппонента на диссертацию Бакировой Н.Дж..pdf',
    },
    {
      title: 'Отзыв официального оппонента на диссертацию Джумалиева Д.С.',
      document:
        '/documents/reviews/Отзыв официального оппонента на диссертацию Джумалиева Д.С..pdf',
    },
    {
      title: 'Отзыв официального оппонента на диссертацию Исмаилбекова М.С.',
      document:
        '/documents/reviews/Отзыв официального оппонента на диссертацию Исмаилбекова М.С..pdf',
    },
    {
      title: 'отзыв  Айдарбаев С.Ж. , Аскарбеков',
      document: '/documents/reviews/отзыв  Айдарбаев С.Ж. , Аскарбеков.pdf',
    },
    {
      title: 'Отзыв оппонента №1 Амангелдиев (1)',
      document: '/documents/reviews/Отзыв оппонента №1 Амангелдиев (1).pdf',
    },
    {
      title: 'отзыв оппонента №1',
      document: '/documents/reviews/отзыв оппонента №1.pdf',
    },
    {
      title: 'отзыв оппонента №2',
      document: '/documents/reviews/отзыв оппонента №2.pdf',
    },
    {
      title: 'Отзыв Сабитова А.А., Аскарбеков',
      document: '/documents/reviews/Отзыв Сабитова А.А., Аскарбеков.pdf',
    },
  ]

  return (
    <AboutPage t={t} pageName={t('reviews')} pageTitle={t('reviews')} image="/images/documents.png">
      {documents.map((item) => (
        <Download key={item.title} document={item} />
      ))}
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default Reviews
