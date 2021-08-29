import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { DraftPage } from '@src/templates'

const ConfuciusClass: React.FC = () => {
  const { t } = useTranslation('international-cooperation')
  const trConfucius = useCallback(
    (tr: string) => {
      return t(`project_work.confucius.${tr}`)
    },
    [t]
  )

  const list1 = t('project_work.confucius.list_1', { returnObjects: true })
  const list2 = t('project_work.confucius.list_2', { returnObjects: true })
  const list3 = t('project_work.confucius.list_3', { returnObjects: true })
  const list4 = t('project_work.confucius.list_4', { returnObjects: true })
  const list5 = t('project_work.confucius.list_5', { returnObjects: true })
  const list6 = t('project_work.confucius.list_6', { returnObjects: true })
  const list7 = t('project_work.confucius.list_7', { returnObjects: true })
  const list8 = t('project_work.confucius.list_8', { returnObjects: true })
  const list9 = t('project_work.confucius.list_9', { returnObjects: true })
  const list10 = t('project_work.confucius.list_10', { returnObjects: true })

  return (
    <DraftPage pageName={trConfucius('title')}>
      <section>
        <h2>{t('project_work.complex_g_gross.title')}</h2>
        <img style={{ width: '100%' }} alt="e-learning" src="/images/project-work-2.png" />
        {Array.from(list1).map((item: any, index: number) => (
          <p key={index}>{item}</p>
        ))}
      </section>
      <section style={{ background: '#F1F4F9' }}>
        <h2 style={{ marginBottom: 30 }}>{trConfucius('title_2')}</h2>
        <h5>{trConfucius('title_3')}</h5>

        <div style={{ margin: '30px 0' }}>
          <h6>{trConfucius('title_4')}</h6>
          <ul>
            {Array.from(list2).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={{ margin: '30px 0' }}>
          <h6>{trConfucius('title_5')}</h6>
          <ul>
            {Array.from(list3).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={{ margin: '30px 0' }}>
          <h6>{trConfucius('title_7')}</h6>
          <ul>
            {Array.from(list4).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <h5>{trConfucius('title_6')}</h5>
      </section>
      <section>
        <h2>{trConfucius('title_8')}</h2>
        <p>{trConfucius('desc_1')}</p>
        <p>{trConfucius('desc_2')}</p>
        <p>{trConfucius('desc_3')}</p>
        <p>{trConfucius('desc_4')}</p>
        <h4>{trConfucius('title_9')}</h4>
        <div style={{ margin: '30px 0' }}>
          <h6>{trConfucius('title_10')}</h6>
          <ul>
            {Array.from(list5).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <p>{trConfucius('desc_5')}</p>
        <p>{trConfucius('desc_6')}</p>
        <p>{trConfucius('desc_7')}</p>
        <p>{trConfucius('desc_8')}</p>
        <div style={{ margin: '30px 0' }}>
          <h6>{trConfucius('title_11')}</h6>
          <ul>
            {Array.from(list6).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <h5>{trConfucius('title_12')}</h5>
        <div style={{ margin: '30px 0' }}>
          <h6>{trConfucius('title_13')}</h6>
          <ul>
            {Array.from(list7).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <h5>{trConfucius('title_14')}</h5>
        <p>{trConfucius('desc_9')}</p>
        <p>{trConfucius('desc_10')}</p>
        <p>{trConfucius('desc_11')}</p>
        <p>{trConfucius('desc_12')}</p>
        <h5>{trConfucius('title_15')}</h5>
        <div style={{ margin: '30px 0' }}>
          <h6>{trConfucius('title_16')}</h6>
          <ul>
            {Array.from(list8).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <h5>{trConfucius('title_17')}</h5>
        <h5>{trConfucius('title_18')}</h5>
        <h5>{trConfucius('title_19')}</h5>
        <h3 style={{ marginTop: 30, fontWeight: 600 }}>{trConfucius('title_20')}</h3>
        <p>{trConfucius('desc_13')}</p>
        <div style={{ margin: '30px 0' }}>
          <h6 style={{ marginBottom: 20 }}>{trConfucius('title_21')}</h6>
          <ul>
            {Array.from(list9).map((item: any, index: number) => (
              <>
                <h6 key={index}>{item.title}</h6>
                <p>{item.desc}</p>
              </>
            ))}
          </ul>
        </div>
        <h3 style={{ marginTop: 30, fontWeight: 600 }}>{trConfucius('title_22')}</h3>
        <div style={{ margin: '30px 0' }}>
          <h6>{trConfucius('title_16')}</h6>
          <ul>
            {Array.from(list10).map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </DraftPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'international-cooperation'])),
  },
})

export default ConfuciusClass
