import { AboutPage } from '../../templates'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const MissionPage: React.FC = () => {
  const { t } = useTranslation('about')

  return (
    <AboutPage
      t={t}
      pageName={t('mission.title')}
      pageTitle={t('mission.title')}
      image="/images/mission-1.png"
    >
      <div className="about-page__mission">
        <p>{t('mission.desc_1')}</p>
        <ul>
          <li>
            <img alt="" src="/images/mission-1.svg" />
            {t('mission.firstMission')}
          </li>
          <li>
            <img alt="" src="/images/mission-2.svg" />
            {t('mission.secondMission')}
          </li>
          <li>
            <img alt="" src="/images/mission-3.svg" />
            {t('mission.thirdMission')}
          </li>
        </ul>
        <img alt="" src="/images/mission-2.png" className="mainImage" />
        <p>{t('strategy.text1')}</p>
        <p>{t('strategy.text2')}</p>
        <h4>{t('strategy.text3')}</h4>
        <ul>
          <li>
            <img alt="" src="/images/mission-4.svg" />
            <p>
              <span>{t(`strategy.direction`)} 1.</span>
              {t('strategy.direction1')}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-5.svg" />
            <p>
              <span>{t('strategy.direction')} 2.</span>
              {t('strategy.direction2')}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-6.svg" />
            <p>
              <span>{t('strategy.direction')} 3.</span>
              {t('strategy.direction3')}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-7.svg" />
            <p>
              <span>{t('strategy.direction')} 4.</span>
              {t('strategy.direction4')}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-8.svg" />
            <p>
              <span>{t('strategy.direction')} 5.</span>
              {t('strategy.direction5')}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-9.svg" />
            <p>
              <span>{t('strategy.direction')} 6.</span>
              {t('strategy.direction6')}
            </p>
          </li>
          <li>
            <img alt="" src="/images/mission-10.svg" />
            <p>
              <span>{t('strategy.direction')} 7.</span>
              {t('strategy.direction7')}
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
