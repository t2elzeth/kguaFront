import { AboutPage } from '../../templates'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const IndexPage: React.FC = () => {
  const { t } = useTranslation('about')

  return (
    <AboutPage
      t={t}
      pageName={t('title')}
      pageTitle={t('basic')}
      image="/images/about/about-hero.png"
    >
      <p>{t('main')}</p>
      <div className="about-page__numbers">
        <div>
          <p>
            <span>47</span>
            Информирование о мероприятиях в КГЮА
          </p>
        </div>
        <div>
          <p>
            <span>5</span>
            Информирование о мероприятиях в КГЮА
          </p>
        </div>
        <div>
          <p>
            <span>6</span>
            Информирование о мероприятиях в КГЮА
          </p>
        </div>
        <div>
          <p>
            <span>2500</span>
            Информирование о мероприятиях в КГЮА
          </p>
        </div>
      </div>
      <img alt="" src="/images/about/about-content-1.png" className="mainImage" />
    </AboutPage>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default IndexPage
