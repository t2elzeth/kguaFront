import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'

const VestnikKSLAInfo: React.FC = () => {
  const { t } = useTranslation('science')
  const common = useTranslation('common')

  const list1 = t('vestnik_ksla_info.list_1', { returnObjects: true })
  const list2 = t('vestnik_ksla_info.list_2', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      pageName={t('vestnik_ksla_info.title')}
      pageTitle={t('vestnik_ksla_info.title')}
      image="/images/vestnik-ksla-info.png"
    >
      <section style={{ marginBottom: 50 }}>
        <p>{t('vestnik_ksla_info.desc_1')}</p>
        <p>{t('vestnik_ksla_info.desc_2')}</p>
        <p>{t('vestnik_ksla_info.desc_3')}</p>
        <p>{t('vestnik_ksla_info.desc_4')}</p>
        <p>{t('vestnik_ksla_info.desc_5')}</p>
        <p>{t('vestnik_ksla_info.desc_6')}</p>
        <p>{t('vestnik_ksla_info.desc_7')}</p>
        <p>{t('vestnik_ksla_info.desc_8')}</p>
        <p>{t('vestnik_ksla_info.desc_9')}</p>
        <h5>{t('vestnik_ksla_info.title_1')}</h5>
        <ul>
          {Array.from(list1).map((item: any, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{t('vestnik_ksla_info.desc_10')}</p>
        <p>{t('vestnik_ksla_info.desc_11')}</p>
        <p>{t('vestnik_ksla_info.desc_12')}</p>
        <p>{t('vestnik_ksla_info.desc_13')}</p>
        <p>{t('vestnik_ksla_info.desc_14')}</p>
        <p>{t('vestnik_ksla_info.desc_15')}</p>
        <p>{t('vestnik_ksla_info.desc_16')}</p>
        <p>{t('vestnik_ksla_info.desc_17')}</p>
        <h5>{t('vestnik_ksla_info.title_2')}</h5>
        <ul>
          {Array.from(list2).map((item: any, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{t('vestnik_ksla_info.address')}</p>
        <h6>
          {common.t('phone')}: <span>{t('vestnik_ksla_info.phone')}</span>
        </h6>
        <h6>
          {common.t('email')}: <span>{t('vestnik_ksla_info.email')}</span>
        </h6>
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default VestnikKSLAInfo
