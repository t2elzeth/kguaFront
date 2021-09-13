import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '@src/templates'
import { Grid } from '@material-ui/core'

const StructuralUnits = () => {
  const { t } = useTranslation('about')
  const list = t('structural_units.list', { returnObjects: true })
  return (
    <AboutPage
      t={t}
      pageTitle={t('structure.structural_units.title')}
      pageName={t('structure.structural_units.title')}
      image="/images/symbolism.png"
    >
      <Grid container justifyContent="space-between">
        {Array.from(list).map((item: any) => (
          <Grid key={item.route} item xs={12} md={6}>
            <Link href={item.route}>
              <div className="structural-unit">
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default StructuralUnits
