import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Grid } from '@material-ui/core'

import CircleCard from '@src/components/CircleCard'
import fetchData from '@src/services/fetchData'
import { AboutPage } from '@src/templates'

const ClubCircles: React.FC = ({ data }: any) => {
  const { t } = useTranslation('students')

  return (
    <AboutPage
      t={t}
      pageName={t('circles.title')}
      pageTitle={t('circles.title')}
      image="/images/news-section-3.png"
    >
      <p>{t('circles.desc_1')}</p>
      <p>{t('circles.desc_2')}</p>
      <p>{t('circles.desc_3')}</p>
      <Grid container>
        {data &&
          Array.from(data).map((item: any) => (
            <Grid key={item.title} item xs={12} md={6}>
              <CircleCard
                supervisor={item.supervisor}
                phone={item.phone}
                img={item.image}
                title={item.title}
                desc={item.description}
              />
            </Grid>
          ))}
      </Grid>
    </AboutPage>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetchData('clubs', { lang: context.locale })
  return {
    props: {
      data: res,
      ...(await serverSideTranslations(context.locale, ['common', 'students'])),
    },
  }
}

export default ClubCircles
