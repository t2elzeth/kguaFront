import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '../../templates'

const BachelorDegree: React.FC = () => {
  const { t } = useTranslation('incoming')
  return (
    <AboutPage
      t={t}
      pageName="Бакалавриат"
      pageTitle="Бакалавриат"
      image="/images/incoming-title-2.png"
    >
      <p>
        Подготовка специалистов в институте Адвокатуры и юстиции осуществляется по двум
        направлениям:
        <br />
        1) Направление «Юриспруденция»
        <br />
        Профили:
        <br />
        <ul>
          «Адвокатура»;
          <br />
          «Юстиция»;
          <br />
          «Информационное право».
          <br />
        </ul>
        Профиль «Адвокатура» готовит специалистов в области адвокатской деятельности.
        <br />
        Профиль «Юстиция» выпускает кадры, специализирующиеся в области правосудия,
        правоохранительной и правоприменительной деятельности.
        <br />
        Профиль «Информационное право» направлен на подготовку юристов в сфере информационного
        права.
        <br />
        2) Направление «Правоохранительная деятельность» по профилю «Административная деятельность».
        <br />
        <br />
        Срок обучения: 4 года
        <br />
        <br />
        Магистерская программа по направлению «Юриспруденция: <br />
        Профили: <br />
        <ul>
          «Информационное право и информационная безопасность»; <br />
          «Адвокатура и нотариат». <br />
        </ul>
        Срок обучения: 2 года
      </p>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'incoming'])),
  },
})

export default BachelorDegree
