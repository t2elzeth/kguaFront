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
          <p className="headline-regular">
            <span>7 600</span>
            студентов обучаются на данный момент
          </p>
          <hr />
        </div>
        <div>
          <p className="headline-regular">
            <span>300</span>
            квалифицированных преподавателей
          </p>
          <hr />
        </div>
        <div>
          <p className="headline-regular">
            <span>20</span>
            доктора наук
          </p>
          <hr />
        </div>
        <div>
          <p className="headline-regular">
            <span>91</span>
            кандидаты наук
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
