import { useRouter, withRouter } from 'next/router'

import { TrainingUnitsPage } from '@src/templates'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const IKLI = () => {
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
      <h4>{Object(currentRoutes).title_1}</h4>
      <p>{Object(currentRoutes).desc_1}</p>
      <p>{Object(currentRoutes).desc_2}</p>
      <p>{Object(currentRoutes).desc_3}</p>
      <p>{Object(currentRoutes).desc_4}</p>
      <p>{Object(currentRoutes).desc_5}</p>
      <h4>
        {Object(currentRoutes).title_2}
        <span>
          <p>{Object(currentRoutes).desc_6}</p>
        </span>
      </h4>
      <h4>
        {Object(currentRoutes).title_3}
        <span>
          <p>{Object(currentRoutes).desc_7}</p>
        </span>
      </h4>
      <h4>{Object(currentRoutes).title_4}</h4>
      <p>{Object(currentRoutes).desc_8}</p>
      <p>{Object(currentRoutes).desc_9}</p>
      <h5>{Object(currentRoutes).title_5}</h5>
      <ul>
        {Array.from(Object(currentRoutes).list_1).map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </TrainingUnitsPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['training-units', 'common'])),
  },
})

export default withRouter(IKLI)
