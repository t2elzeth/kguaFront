import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'

const High: React.FC = () => {
  const { t } = useTranslation('about')

  const links = t('structural_units.list', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      secondLinks={links}
      pageTitle={t('structural_units.high.title')}
      pageName={t('structural_units.high.title')}
      image="/images/structural-unit-title.png"
    >
      <section>
        <h2>{t('structural_units.high.title')}</h2>
        <h4>Цель создания</h4>
        <p>Описание</p>
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default High
