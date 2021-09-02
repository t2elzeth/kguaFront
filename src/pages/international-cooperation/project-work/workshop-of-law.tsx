import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DraftPage } from '@src/templates'

const ELearning: React.FC = () => {
  const { t } = useTranslation('international-cooperation')
  const common = useTranslation('common')

  const list1 = t('project_work.workshop.list_1', { returnObjects: true })
  const list2 = t('project_work.workshop.list_2', { returnObjects: true })

  return (
    <DraftPage pageName={t('project_work.e-learning.title')}>
      <div className="e-learning">
        <section>
          <h2>{t('project_work.workshop.title')}</h2>

          <img style={{ width: '100%' }} alt="e-learning" src="/images/e-learning.png" />
          <h4>{t('project_work.workshop.title_1')}</h4>
          <p>{t('project_work.workshop.desc_1')}</p>
          <h4>{t('project_work.workshop.title_2')}</h4>
          <ul>
            {Array.from(list1).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>{t('project_work.workshop.title_3')}</h4>
          <ul>
            {Array.from(list2).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>{common.t('contacts')}</h4>
          <h5>{`${common.t('phone')}: ${t('project_work.workshop.phone')}`}</h5>
          <h5>{`${common.t('email')}: ${t('project_work.workshop.email')}, ${t(
            'project_work.workshop.email_2'
          )}`}</h5>
        </section>
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
