import { AboutPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { Download } from '@src/components'

const Order: React.FC = () => {
  const { t } = useTranslation('science')

  const orders = [
    {
      title: 'Приказ о замене ученого секретаря диссертационного совета',
      document: '/documents/order_1.pdf',
    },
    {
      title: 'Приказ об утверждении диссертационного совета',
      document: '/documents/order_2.pdf',
    },
  ]

  return (
    <AboutPage t={t} pageName={t('order')} pageTitle={t('order')} image="/images/documents.png">
      {orders.map((item) => (
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

export default Order
