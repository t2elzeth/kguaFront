import { Grid } from '@material-ui/core'
import CircleCard from '@src/components/CircleCard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '../../templates'

const ClubCircles: React.FC = () => {
  const { t } = useTranslation('students')

  const circles = t('circles.circle_list', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      pageName={t('circles.title')}
      pageTitle={t('circles.title')}
      image="/images/students-self-1.png"
    >
      <Grid container>
        {Array.from(circles).map((item: any) => (
          <Grid key={item.title} item xs={12} md={6}>
            <CircleCard img={item.img} title={item.title} desc={item.desc} />
          </Grid>
        ))}
      </Grid>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'students'])),
  },
})

export default ClubCircles
