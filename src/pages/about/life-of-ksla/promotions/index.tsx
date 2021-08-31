import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DraftPage } from '@src/templates'
import { Activities } from '@src/components'
import fetchData from '@src/services/fetchData'
import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'

const Promotions: React.FC = (props: any) => {
  const router = useRouter()
  const { t } = useTranslation('about')

  return (
    <DraftPage pageName={t('life_of_ksla.promotion')}>
      <div className="e-learning">
        <section>
          <h2 className="title" style={{ marginBottom: 30 }}>
            {t('life_of_ksla.promotion')}
          </h2>
          <Grid container>
            {props?.data?.map((item: any, index: number) => {
              return (
                <Grid key={index} item xs={12} md={4}>
                  <Activities
                    data={item}
                    onClick={() =>
                      router.push(`/about/life-of-ksla/promotions/promotion/${item.id}`)
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
  const res = await fetchData('promotion', { lang: locale })

  return {
    props: {
      data: res,
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  }
}

export default Promotions
