import { useRouter, withRouter } from 'next/router'

import { TrainingUnitsPage } from '@src/templates'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const GSL = () => {
  const { t } = useTranslation('common')

  const facultyLinks = t('faculties', { returnObjects: true })
  console.log('facultyLinks: ', facultyLinks)

  const facultyLinks2 = facultyLinks.reduce((acc, rec) => {
    return {
      ...acc,
      [rec.name]: rec,
    }
  }, {})
  console.log('facultyLinks2: ', facultyLinks2)

  return (
    <TrainingUnitsPage
      pageName="sdds"
      links={facultyLinks}
      pageTitle="sdsd"
      image="/images/symbolism.png"
    >
      GSL
    </TrainingUnitsPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default withRouter(GSL)
