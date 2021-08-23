import { AboutPage } from '../../templates'
import { Download } from '@Components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const documents = [
  {
    title: 'Лицензии IT-академии',
    src: '',
  },
  {
    title: 'Положения',
    src: '',
  },
  {
    title: 'Временный порядок обучения с применением ДОТ при реализации ОП в КГЮА',
    src: '',
  },
  {
    title: 'Отзыв ведущей организации на диссертацию Джумалиева Д.С.',
    src: '',
  },
  {
    title:
      'Временный регламент проведения итогового контроля зачетно-экзаменационной сессии 2020-2021 уч.г. по дисциплинам учебного плана всех направлений и профилей',
    src: '',
  },
  {
    title:
      'Временный регламент проведения Итоговой гос-ой аттестации с применением ДОТ, обучающихся в КГЮА по ОП бак, спец, маг',
    src: '',
  },
  {
    title:
      'Инструкция по проведению итогового контроля зачетно-экзаменационной сессии 2020-2021 уч.г.',
    src: '',
  },
]

const LocalActsPage: React.FC = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage
      t={t}
      pageName="Документы"
      pageTitle="Локальные-нормативные акты"
      image="/images/documents.png"
    >
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

export default LocalActsPage
