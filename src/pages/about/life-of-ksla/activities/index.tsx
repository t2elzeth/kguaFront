import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DraftPage } from '@src/templates'
import { Activities } from '@src/components'
import fetchData from '@src/services/fetchData'
import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'

const Activity: React.FC = (props: any) => {
  console.log('props: ', props)
  const router = useRouter()
  const { t } = useTranslation('about')

  return (
    <DraftPage pageName={t('life_of_ksla.title')}>
      <div className="e-learning">
        <section>
          <h2>{t('life_of_ksla.activity')}</h2>
          <Grid container>
            {props?.data?.map((item: any, index: number) => {
              return (
                <Grid key={index} item xs={12} md={4}>
                  <Activities
                    data={item}
                    onClick={() =>
                      router.push(`/about/life-of-ksla/activities/activity/${item.id}`)
                    }
                  />
                </Grid>
              )
            })}
          </Grid>
        </section>
      </div>
    </DraftPage>
  )
}

export const getStaticProps = async ({ locale }) => {
  const res = await fetchData('events', { lang: locale })

  return {
    props: {
      data: res,
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  }
}

export default Activity
