import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '../../../templates'

const StructuralUnits = () => {
  const { t } = useTranslation('about')
  const list = t('structural_units.list', { returnObjects: true })
  return (
    <AboutPage
      t={t}
      pageName="Струтурные подразделения"
      pageTitle="Структурные подразделения"
      image="/images/symbolism.png"
    >
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {Array.from(list).map((item: any) => (
          <Link key={item.route} href={item.route}>
            <div className="structural-unit">
              <img src={item.img} alt="" />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
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
