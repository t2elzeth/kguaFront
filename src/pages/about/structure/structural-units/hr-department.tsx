import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'

const HR: React.FC = () => {
  const { t } = useTranslation('about')

  const links = t('structural_units.list', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      secondLinks={links}
      pageTitle={t('structural_units.HR.title')}
      pageName={t('structural_units.HR.title')}
      image="/images/structural-unit-title.png"
    >
      <section>
        <h2>{t('structural_units.HR.title')}</h2>
        <p>
          Отдел кадров является самостоятельным структурным подразделением КГЮА, которое создается,
          реорганизуется и прекращает свою деятельность приказом ректора.
        </p>
        <h4>Цель создания</h4>
        <p>
          Целью Отдела кадров является организационное обеспечение реализации единой кадровой
          политики КГЮА на основе системы управления кадровым потенциалом, а также обеспечение
          оперативного хранения личных дел сотрудников и обучающихся.
        </p>
        <h4>Задачи отдела</h4>
        <ul>
          <li>установление гарантий трудовых прав сотрудников;</li>
          <li>создание благоприятных условий труда;</li>
          <li>разработка кадровой политики;</li>
          <li>подбор и расстановка кадров на основе их квалификации, личных и деловых качеств;</li>
          <li>организация кадрового делопроизводства;</li>
          <li>обеспечение сохранности документов постоянного срока хранения.</li>
        </ul>
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default HR
