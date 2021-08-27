import { useRouter, withRouter } from 'next/router'

import { TrainingUnitsPage } from '@src/templates'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const FCDL = () => {
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
      <p>{Object(currentRoutes).desc_2}</p>
      <p>{Object(currentRoutes).desc_3}</p>
      <p>{Object(currentRoutes).desc_4}</p>
      <p>{Object(currentRoutes).desc_5}</p>
      <p>{Object(currentRoutes).desc_6}</p>
      <p>{Object(currentRoutes).title_1}</p>
      <ul>
        {Array.from(Object(currentRoutes).list_1).map((item: any, index: number) => (
          <li key={index}>
            <span style={{ fontWeight: 'bold' }}>{item.title}</span>
            {item.desc}
          </li>
        ))}
      </ul>

      <h6>
        {common.t('address')}: <span>{Object(currentRoutes).address}</span>
      </h6>
      <h6>
        {common.t('phone')}: <span>{Object(currentRoutes).phone}</span>
      </h6>
      <h6>
        {common.t('schedule')}: <span>{Object(currentRoutes).schedule}</span>
      </h6>
      <br />
      <h6>
        {common.t('address')}: <span>{Object(currentRoutes).address_2}</span>
      </h6>
      <h6>
        {common.t('phone')}: <span>{Object(currentRoutes).phone_2}</span>
      </h6>
      <h6>
        {common.t('schedule')}: <span>{Object(currentRoutes).schedule_2}</span>
      </h6>
    </TrainingUnitsPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['training-units', 'common'])),
  },
})

export default withRouter(FCDL)
