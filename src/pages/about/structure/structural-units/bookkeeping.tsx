import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'

const BookKeeping: React.FC = () => {
  const { t } = useTranslation('about')

  const links = t('structural_units.list', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      secondLinks={links}
      pageTitle={t('structural_units.book_keeping.title')}
      pageName={t('structural_units.book_keeping.title')}
      image="/images/structural-unit-title.png"
    >
      <section>
        <h2>{t('structural_units.book_keeping.title')}</h2>
        <h4>Цель создания</h4>
        <p>
          Главная цель отдела БУиФК – ведение бухгалтерского учета, своевременное представление
          полной и достоверной бухгалтерской отчетности. формирование ϲʙᴏевременной, качественной
          информации о финансовой и хозяйственной деятельности учреждения для внешних и внутренних
          пользователей.
        </p>
        <h4>Основными задачами отдела БУиФК являются:</h4>
        <p>
          - организация учета финансово-хозяйственной деятельности;
          <br />
          - формирование полной и достоверной информации о хозяйственных и финансовых процессах,
          результатах деятельности организации;
          <br />- выявление резервов повышения эффективности хозяйственной и финансовой деятельности
          организации;
          <br /> - подготовка данных для составления достоверной финансовой отчетности для внешних и
          внутренних пользователей;
          <br /> - определение финансовых результатов деятельности организации;
          <br /> - осуществление контроля за правильностью использования поступающих средств,
          получаемых от осуществления уставной деятельности;
          <br /> - осуществление контроля за сохранностью собственности;
          <br /> - осуществление контроля за рациональным использованием материальных, трудовых и
          денежных ресурсов;
          <br /> - контроль за состоянием расчетов с физическими и юридическими лицами.
        </p>
        <h4>Деятельность отдела</h4>
        <p>
          Отдел бухгалтерского учета и финансового контроля является структурным подразделением КГЮА
          и подчиняется непосредственно ректору, а также проректору по финансово-экономической
          деятельности. Отдел бухгалтерского учета и финансового контроля в своей работе
          руководствуется действующими нормативно-правовыми актами Кыргызской Республики, Уставом и
          другими документами университета. Деятельность отдела бухгалтерского учета и финансового
          контроля направлена на: - ведение бухгалтерского учета и отчетности; - осуществление
          предварительного контроля заключаемых договоров, контроль за своевременным и правильным
          оформлением первичных учетных документов и законностью совершаемых операций; - проведение
          расчетов, возникающих в процессе исполнения сметы доходов и расходов с организациями и
          отдельными физическими лицами; - разработку перспективных и текущих планов
          финансово-экономической деятельности КГЮА и организация их исполнения; - участие в
          разработке мероприятий по эффективному использованию капиталовложений, повышению
          конкурентоспособности университета; - участие в разработке нормативной и методической
          документации, регламентирующей финансово-экономическую деятельность университета; -
          разработку мероприятий и предложений по рациональному и эффективному использованию средств
          на содержание КГЮА, организация и обеспечение выполнения плановых показателей,
          утвержденных в смете; - предотвращение негативных явлений хозяйственной деятельности
          организации и выявление внутрихозяйственных резервов, обеспечение ее финансовой
          устойчивости.
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

export default BookKeeping
