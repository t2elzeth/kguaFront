import { useRouter, withRouter } from 'next/router'

import { TrainingUnitsPage } from '@src/templates'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const IMPP = () => {
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
      <p>{Object(currentRoutes).title_1}</p>
      <ul>
        {Array.from(Object(currentRoutes).list_1).map((item: any, index: number) => (
          <li style={{ fontWeight: 500 }} key={index}>
            {index === 0 ? (
              <>
                {item}
                <ul>
                  {Array.from(Object(currentRoutes).list_1_1).map((item: any, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              item
            )}
          </li>
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

export default withRouter(IMPP)
