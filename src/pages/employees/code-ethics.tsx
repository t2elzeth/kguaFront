import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { Download } from '@src/components'

const CodeEthics: React.FC = () => {
  const router = useRouter()
  console.log('router: ', router)
  const { t } = useTranslation('employees')

  const list = t('sidebar_list', { returnObjects: true })
  const currentData = list.find((item) => item.route === router.pathname)

  const document = {
    title: 'Этический кодекс работников и обучающихся КГЮА',
    document: currentData.document,
  }
  console.log('document: ', document)

  return (
    <AboutPage
      t={t}
      pageName={currentData.name}
      pageTitle={currentData.name}
      image="/images/documents.png"
    >
      <Download document={document} />
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'employees'])),
  },
})

export default CodeEthics
