import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'

const CommonDepartment: React.FC = () => {
  const { t } = useTranslation('about')

  const links = t('structural_units.list', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      secondLinks={links}
      pageTitle={t('structural_units.common_department.title')}
      pageName={t('structural_units.common_department.title')}
      image="/images/structural-unit-title.png"
    >
      <section>
        <h2>{t('structural_units.common_department.title')}</h2>
        <h4>Цель создания</h4>
        <p>
          Общий отдел Кыргызского государственного юридического университета (КГЮА) образован с
          целью обеспечения в КГЮА и в его структурных подразделениях единой системы
          делопроизводства и номенклатуры дел, обеспечения оперативности и эффективности,
          принимаемых ректоратом и структурными подразделениями решений.
        </p>
        <h4>Задачи отдела</h4>
        <p>
          Обеспечение четкой организации делопроизводства в администрации и в структурных
          подразделениях КГЮА в соответствии с инструкцией по веде
        </p>
        <h4>Деятельность отдела </h4>
        <p>
          Общий отдел является структурным подразделением КГЮА, через которое ректорат осуществляет
          руководство деятельностью КГЮА в части, касающейся информационного и документационного
          обеспечения
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

export default CommonDepartment
