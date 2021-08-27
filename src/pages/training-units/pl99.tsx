import { useRouter, withRouter } from 'next/router'

import { TrainingUnitsPage } from '@src/templates'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PL99 = () => {
  const router = useRouter()
  const common = useTranslation('common')

  const facultyLinks = common.t('faculties', { returnObjects: true })
  const currentRoutes = Array.from(facultyLinks).find((item: any) => item.route === router.pathname)

  return (
    <TrainingUnitsPage
      pageName={Object(currentRoutes).name}
      links={facultyLinks}
      pageTitle={Object(currentRoutes).name}
      image="/images/symbolism.png"
    >
      <p>{Object(currentRoutes).desc_1}</p>
      <h5>{Object(currentRoutes).title_1}</h5>
      <h6>{Object(currentRoutes).desc_2}</h6>
      <ul>
        {Array.from(Object(currentRoutes).list_1).map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{Object(currentRoutes).desc_3}</p>
      <h6>{Object(currentRoutes).desc_4}:</h6>
      <ul>
        {Array.from(Object(currentRoutes).list_2).map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{Object(currentRoutes).desc_5}</p>
      <h5>{Object(currentRoutes).title_2}</h5>
      <h6>{Object(currentRoutes).title_6}</h6>
      <ul>
        {Array.from(Object(currentRoutes).list_3).map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <section>
        <h4>{Object(currentRoutes).title_3}</h4>
        {Array.from(Object(currentRoutes).history).map((item: any, index: number) => (
          <p key={index}>{item}</p>
        ))}
      </section>
    </TrainingUnitsPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['training-units', 'common'])),
  },
})

export default withRouter(PL99)
