import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '../../../templates'

const TrainingUnits = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage
      t={t}
      pageName="Учебные подразделения"
      pageTitle="Учебные подразделения"
      image="/images/symbolism.png"
    >
      <div className="structural-unit">
        <img src="/images/plus.svg" alt="" />
        <p>ИПЦ Мастерская права</p>
      </div>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default TrainingUnits
