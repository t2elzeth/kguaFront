import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const RegulatoryFramework: React.FC = () => {
  const { t } = useTranslation('science')

  const documents = [
    {
      title: 'Инструкция по оформлению диссертации',
      document: '/documents/regulatory-framework/Инструкция по оформлению диссертации.pdf',
    },
    {
      title: 'Образец оформления списка научных трудов',
      document: '/documents/regulatory-framework/Образец оформления списка научных трудов.pdf',
    },
    {
      title: 'Положение  о порядке присуждения ученной степени',
      document:
        '/documents/regulatory-framework/Положение  о порядке присуждения ученной степени.pdf',
    },
    {
      title: 'Положение о Дисс совете',
      document: '/documents/regulatory-framework/Положение о Дисс совете.pdf',
    },
    {
      title: 'Положение об экспертном совете',
      document: '/documents/regulatory-framework/Положение об экспертном совете.pdf',
    },
  ]

  return (
    <AboutPage
      t={t}
      pageName={t('regulatory_framework')}
      pageTitle={t('regulatory_framework')}
      image="/images/documents.png"
    >
      {documents.map((item) => (
        <Download key={item.title} document={item} />
      ))}
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default RegulatoryFramework
