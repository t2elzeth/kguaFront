import { Grid, makeStyles } from '@material-ui/core'
import { WithoutSideBar } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme: any) => ({
  categories: {
    // margin: theme.spacing(3),
  },
  title: {
    textDecoration: 'none',
    color: '#0054A6',
    fontWeight: 'bold',
    fontSize: '24px',
    textTransform: 'uppercase',
    padding: theme.spacing(2),
  },
}))

const VirtualTour = () => {
  const classes = useStyles()
  const { t } = useTranslation('about')
  const common = useTranslation('common')
  const categories = t('virtual_tour.sidebar_list', { returnObjects: true })

  return (
    <WithoutSideBar pageName={t('virtual_tour.title')}>
      <div className="slider">
        <img alt="virtual_tour" src="/images/about/virtual_tour/virtual_tour-hero.png" />
        <div>
          <h4>{t('virtual_tour.title')}</h4>
          <p>{t('virtual_tour.desc')}</p>
        </div>
      </div>
      <h2>{t('virtual_tour.title')}</h2>
      <Grid container spacing={5} className={classes.categories}>
        {Array.from(categories).map((item: any) => (
          <Grid key={item.route} item xs={12} md={4} lg={4}>
            <a
              style={{ textDecoration: 'none' }}
              href={item.route}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ backgroundColor: '#F1F4F9' }}>
                <img style={{ width: '100%' }} height="263" alt={item.name} src={item.img} />
                <p className={classes.title}>{item.name}</p>
                <div style={{ padding: 20 }}>
                  <img alt="arrow" src="/images/arrow-3.svg" />
                  <span
                    style={{ color: 'red', paddingLeft: 10, fontWeight: 500, fontSize: '14px' }}
                  >
                    {common.t('learn_more')}
                  </span>
                </div>
              </div>
            </a>
          </Grid>
        ))}
      </Grid>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default VirtualTour
