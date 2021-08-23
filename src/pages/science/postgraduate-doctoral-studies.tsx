import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

export type PostgraduateDoctoralStudiesProps = {}

const PostgraduateDoctoralStudies: React.FC<PostgraduateDoctoralStudiesProps> = () => {
  const router = useRouter()
  const { t } = useTranslation('science')
  const list = t('sidebar_list', { returnObjects: true })
  const currentRoute = list.find((item) => item.route === router.pathname)
  return (
    <AboutPage
      t={t}
      pageName={currentRoute.name}
      pageTitle={currentRoute.name}
      image="/images/science-title-2.png"
    >
      <section style={{ marginBottom: 50 }}>
        <h3>АСПИРАНТУРА</h3>
        <p>
          В КГЮА также осуществляется подготовка научно-педагогических кадров высшей квалификации в
          рамках аспирантуры по направлению «Юриспруденция». Аспирантура является основной формой
          подготовки научно-педагогических и научных кадров в системе послевузовского
          профессионального образования предоставляет гражданам возможность повышения уровня
          образования, научной, педагогической квалификации на базе высшего профессионального
          образования
        </p>
        <h4>Правила приема в аспирантуру</h4>
        <p>
          Прием в аспирантуру проводится ежегодно с 1 сентября по 15 октября, а вступительные
          экзамены проходят с 15 октября по 30 ноября. Обучение в аспирантуре осуществляется по
          очной (3 года) и заочной (4 года) формам обучения. Для аспирантов и соискателей КГЮА и
          других вузов ежегодно организуются курсы по подготовке к сдаче кандидатских экзаменов:
        </p>
        <ul>
          <li>по истории и философии науки; </li>
          <li>по иностранному языку;</li>
          <li>по кыргызскому языку.</li>
        </ul>
      </section>
      <section style={{ marginBottom: 50 }}>
        <h3>ДОКТОРАНТУРЫ</h3>
      </section>
      <section>
        <h3>ИНФОРМАЦИЯ О СОТРУДНИКАХ</h3>
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default PostgraduateDoctoralStudies
