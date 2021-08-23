import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { WithoutSideBar } from '@src/templates'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import CardProject from '@src/components/CardProject'

const ProjectWork: React.FC = () => {
  const { t } = useTranslation('international-cooperation')
  const categories = t('project_work.sidebar_list', { returnObjects: true })
  return (
    <WithoutSideBar pageName={t('international_events')}>
      <div className="international-cooperation">
        <h2>{t('project_work.title')}</h2>
        <div className="content">
          <Grid container spacing={2} justifyContent="space-between" alignItems="baseline">
            {categories.map((item) => (
              <Link key={item.route} href={item.route}>
                <Grid item xs={12} md={4}>
                  <CardProject data={item} />
                </Grid>
              </Link>
            ))}
          </Grid>
        </div>
      </div>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'international-cooperation'])),
  },
})

export default ProjectWork
