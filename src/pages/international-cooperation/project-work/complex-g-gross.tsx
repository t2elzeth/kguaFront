import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DraftPage } from '@src/templates'

const ELearning: React.FC = () => {
  const { t } = useTranslation('international-cooperation')

  const list1 = t('project_work.complex_g_gross.list_1', { returnObjects: true })

  return (
    <DraftPage pageName={t('project_work.complex_g_gross.title')}>
      <div className="e-learning">
        <section>
          <h2>{t('project_work.complex_g_gross.title')}</h2>
          <img style={{ width: '100%' }} alt="e-learning" src="/images/project-work-3.png" />
          <h5>{t('project_work.complex_g_gross.desc_1')}</h5>
          <h5>{t('project_work.complex_g_gross.title_2')}</h5>
          <ul>
            {Array.from(list1).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        <section style={{ background: '#F1F4F9' }}></section>
      </div>
    </DraftPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'international-cooperation'])),
  },
})

export default ELearning
