import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const AwardsPage: React.FC = () => {
  const { t } = useTranslation('about')
  const trAwards = useCallback(
    (tr: string) => {
      return t(`awards.${tr}`)
    },
    [t]
  )

  const list = t('awards.list', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      pageName={trAwards('title')}
      pageTitle={trAwards('title')}
      image="/images/symbolism.png"
    >
      <div className="about-page__awards">
        <p>{trAwards('desc_1')}</p>
        <p>{trAwards('desc_2')}</p>
        <div className="about-page__awards-block">
          <p>
            <span>{trAwards('man_1')}</span>
            {trAwards('desc_3')}
          </p>
          <img alt="" src="/images/awards-1.png" className="leftImg" />
        </div>

        <div className="about-page__awards-block">
          <img alt="" src="/images/awards-2.png" className="rightImg" />
          <p>
            <span>{trAwards('man_2')}</span>
            {trAwards('desc_4')}
            <br />
            {trAwards('desc_5')}
            <br />
          </p>
        </div>
        <p>
          {trAwards('desc_6')}
          <ul>
            {Array.from(list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <br />
          <br />
          {trAwards('desc_7')}
        </p>
      </div>
      <img alt="" src="/images/news-section-1.png" className="mainImage" />
      <p>
        {trAwards('desc_8')}
        <br />
        {trAwards('desc_9')}
        <br />
        {trAwards('desc_10')}
        <br />
        <br />
        {trAwards('desc_11')}
      </p>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default AwardsPage
