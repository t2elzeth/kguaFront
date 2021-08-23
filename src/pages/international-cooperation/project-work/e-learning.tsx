import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DraftPage } from '@src/templates'
import { Grid } from '@material-ui/core'

const ELearning: React.FC = () => {
  const { t } = useTranslation('international-cooperation')

  const objectivesList = t('project_work.e-learning.objectives_project_list', {
    returnObjects: true,
  })

  const specificTaskList = t('project_work.e-learning.specific_tasks_project_list', {
    returnObjects: true,
  })

  const directoryObjectivesList = t('project_work.e-learning.directory_objectives_list', {
    returnObjects: true,
  })

  const catalogList = t('project_work.e-learning.catalog_list', {
    returnObjects: true,
  })

  return (
    <DraftPage pageName={t('e-learning')}>
      <div className="e-learning">
        <section>
          <h2>{t('project_work.e-learning.title')}</h2>
          <img style={{ width: '100%' }} alt="e-learning" src="/images/e-learning.png" />
          <h4>{t('project_work.e-learning.title-1')}</h4>
          <p>{t('project_work.e-learning.description-1')}</p>
          <h4>{t('project_work.e-learning.project_coordinator')}</h4>
          <p>{t('project_work.e-learning.project_coordinator_desc')}</p>
          <h4>{t('project_work.e-learning.objectives_project')}</h4>
          <ul>
            {Array.from(objectivesList).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h4>{t('project_work.e-learning.specific_tasks_project')}</h4>
          <ul>
            {Array.from(specificTaskList).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{t('project_work.e-learning.description-2')}</p>
          <p>{t('project_work.e-learning.description-3')}</p>
          <p>{t('project_work.e-learning.description-4')}</p>
          <p>{t('project_work.e-learning.description-5')}</p>
          <p>{t('project_work.e-learning.description-6')}</p>
        </section>
        <section style={{ background: '#F1F4F9' }}>
          <h4>{t('project_work.e-learning.e-learning-center-ksla')}</h4>
          <p>{t('project_work.e-learning.e-learning_center_ksla_desc-1')}</p>
          <p>{t('project_work.e-learning.e-learning_center_ksla_desc-2')}</p>
          <p>{t('project_work.e-learning.e-learning_center_ksla_desc-3')}</p>
          <img style={{ width: '100%' }} alt="e-learning" src="/images/e-learning-2.png" />
          <h4>{t('project_work.e-learning.directory_objectives')}</h4>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <ul>
                {Array.from(directoryObjectivesList).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Grid>
            <Grid xs={12} md={4} style={{ textAlign: 'center' }}>
              <img alt="" src="/images/directory_objective.png" />
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid xs={12} md={4} style={{ textAlign: 'center' }}>
              <img alt="" src="/images/directory_objective-2.png" />
            </Grid>
            <Grid item xs={12} md={8}>
              <h5>{t('project_work.e-learning.what_is_catalog')}</h5>
              <p>{t('project_work.e-learning.catalog_desc')}</p>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={8}>
              <h5>{t('project_work.e-learning.structure_catalog')}</h5>
              <ul>
                {Array.from(catalogList).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{t('project_work.e-learning.catalog_desc-2')}</p>
            </Grid>
            <Grid xs={12} md={4} style={{ textAlign: 'center' }}>
              <img alt="" src="/images/directory_objective-3.png" width="100%" />
            </Grid>
          </Grid>
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
