import { AboutPage } from '../../templates'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const MissionPage: React.FC = () => {
  const { t } = useTranslation('about')

  return (
    <AboutPage
      t={t}
      pageName="Миссия и стратегия"
      pageTitle="Миссия и стратегия"
      image="/images/mission-1.png"
    >
      <div className="about-page__mission">
        {/* <p>Свою миссию КГЮА видит в укреплении позиции университета как ведущего, социально ориентированного вуза в области образования и развитие его как центра фундаментальных научных и экспертно-аналитических исследований в области права.</p> */}
        <p>{t('mission.title')}</p>
        {/* <h4>
          Видение университета: КГЮА  стремится быть:
      </h4> */}
        <ul>
          <li>
            <img alt="" src="/images/mission-1.svg" />
            {t('mission.firstMission')}
            {/* активным участником политического, социально–экономического и культурного развития Кыргызской Республики; */}
          </li>
          <li>
            <img alt="" src="/images/mission-2.svg" />
            {t('mission.secondMission')}
            {/* открытым для установления партнерских отношений с сообществами в образовательных, научных проектах; */}
          </li>
          <li>
            <img alt="" src="/images/mission-3.svg" />
            {t('mission.thirdMission')}
            {/* центром создания и передачи своих знаний, умений, ресурсов и ценностей; научным сообществом, развивающим динамичную научную среду,      сообществом вовлеченных студентов и сотрудников, разделяющих ответственность за выполнение миссии  университета и получающих признание за свой вклад в его развитие. */}
          </li>
        </ul>
        {/* <p>Целью стратегического развития КГЮА является вхождение университета  в число 10 ведущих вузов Кыргызской Республики по качеству своих компетенций и разработок и осуществляющего значительный практический вклад в  экспертно-аналитические исследования в области права Кыргызской Республики,  формирование на базе  университета передового экспертно-консультативного, аналитического  центра в области права.
        Это должно позволить университету выйти  по своим функциям встать в один ряд с вузами, имеющими узнаваемый бренд, стать флагманом  юридического образования в стране.
      </p> */}
        <img alt="" src="/images/mission-2.png" className="mainImage" />
        <p>{t('strategy.text1')}</p>
        <p>{t('strategy.text2')}</p>
        <h4>
          {t('strategy.text3')}
          {/* Для реализации миссии и достижения цели стратегического развития определены следующие направления развития КГЮА: */}
        </h4>
        <ul>
          <li>
            <img alt="" src="/images/mission-4.svg" />
            <p>
              <span>{t(`strategy.direction`)} 1.</span>
              {t('strategy.direction1')}
              {/* Модернизация образовательного процесса на основе разработки инновационных образовательных программ. */}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-5.svg" />
            <p>
              <span>{t('strategy.direction')} 2.</span>
              {t('strategy.direction2')}
              {/* Развитие человеческих ресурсов. */}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-6.svg" />
            <p>
              <span>{t('strategy.direction')} 3.</span>
              {t('strategy.direction3')}
              {/* Модернизация научно-исследовательской и экспертной деятельности. */}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-7.svg" />
            <p>
              <span>{t('strategy.direction')} 4.</span>
              {t('strategy.direction4')}
              {/* Развитие международного сотрудничества. */}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-8.svg" />
            <p>
              <span>{t('strategy.direction')} 5.</span>
              {t('strategy.direction5')}
              {/* Развитие социально-ответственной личности. */}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-9.svg" />
            <p>
              <span>{t('strategy.direction')} 6.</span>
              {t('strategy.direction6')}
              {/* Укрепление финансово-экономического положения. */}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-10.svg" />
            <p>
              <span>{t('strategy.direction')} 7.</span>
              {t('strategy.direction7')}
              {/* Модернизация инфраструктуры. */}
            </p>
          </li>
        </ul>
      </div>
    </AboutPage>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})
export default MissionPage
