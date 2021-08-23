import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '../../../templates'

const StructuralUnits = () => {
  const { t } = useTranslation('about')
  return (
    <AboutPage
      t={t}
      pageName="Струтурные подразделения"
      pageTitle="Структурные подразделения"
      image="/images/symbolism.png"
    >
      <div className="structural-unit">
        <img src="/images/plus.svg" alt="" />
        <p>Структурные подразделения</p>
      </div>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default StructuralUnits
