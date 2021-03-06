import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'

const ExtraActivities: React.FC = () => {
  const { t } = useTranslation('about')

  const links = t('structural_units.list', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      secondLinks={links}
      pageTitle={t('structural_units.extra.title')}
      pageName={t('structural_units.extra.title')}
      image="/images/structural-unit-title.png"
    >
      <section>
        <h2>{t('structural_units.extra.title')}</h2>
        <h4>Цель создания</h4>
        <p>
          1)Формировать личность студента, развивать его внутренний потенциал, воспитывать доброту к
          окружению. <br />
          2)Привлекать студентов к работе студенческого самоуправления, развивать лидерские
          способности студентов.
        </p>
        <h4>Задачи отдела</h4>
        <p>
          1)Обеспечение комплексного (координационного), текущего планирования внеучебной работы
          университета и его реализация. <br /> 2)Содействие в разработке и выпуска документов по
          организации внеучебной работы.
          <br /> 3)Изучение, распространение и внедрение в практику внеучебной работы научных
          достижений, использование результатов социологических исследований.
          <br /> 4)Практическое обеспечение работы по организации досуга и быта студентов.
          <br /> 5)Развитие художественной самодеятельности студентов КГЮА
          <br /> 6)Проведение культурно-массовых мероприятий в университете (фестивалей, праздников
          и пр.).
          <br /> 7)Координация деятельности студенческих общественных формирований: Студенческий
          совет; Уполномоченный по правам студентов; Команда КВН КГЮА; Дебатный клуб (ораторское
          искусство); Творческие кружки.
        </p>
        <h4>Деятельность отдела</h4>
        <p>
          Отдел по внеучебной работе в своей деятельности руководствуется Уставом Кыргызского
          государственного юридического университета (КГЮА), приказами и инструкциями, другими
          нормативно – правовыми актами, действующими в сфере воспитательной и внеучебной работы.
        </p>
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default ExtraActivities
