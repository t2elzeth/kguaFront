import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Grid } from '@material-ui/core'

import { CardTrainingUnit } from '@src/components'
import WithoutSideBar from '../../templates/WithoutSideBar'
import Link from 'next/link'

const TrainingUnits: React.FC = () => {
  const { t } = useTranslation('')
  const faculties = t('faculties', { returnObjects: true })

  return (
    <WithoutSideBar pageName="Высшая школа права">
      <h2 style={{ marginBottom: 50 }}>{t('faculties_and_institutes')}</h2>
      <p style={{ marginBottom: 20 }}>
        В настоящее время в составе КГЮА действуют следующие институты:
      </p>
      <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={2}>
        {Array.from(faculties).map((item: any) => (
          <Link href={item.route} key={item.route}>
            <Grid key={item.route} item xs={12} md={4}>
              <a style={{ cursor: 'pointer' }}>
                <CardTrainingUnit img={item.img} name={item.name} />
              </a>
            </Grid>
          </Link>
        ))}
      </Grid>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default TrainingUnits
