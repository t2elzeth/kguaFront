import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { AboutPage } from '../../templates'

const AdmissionRules: React.FC = () => {
  const { t } = useTranslation('incoming')
  const router = useRouter()
  const common = useTranslation('common')

  const list1 = t('sidebar_list', { returnObjects: true })
  const currentRoute = Array.from(list1).find((item: any) => item.route === router.pathname)

  const list2 = t('rules.list_2', { returnObjects: true })
  const list3 = t('rules.list_3', { returnObjects: true })

  return (
    <AboutPage
      t={t}
      pageName={Object(currentRoute).name}
      pageTitle={Object(currentRoute).name}
      image="/images/incoming-title-3.png"
    >
      <h4>{t('rules.title_1')}</h4>
      <p>
        {t('rules.title_2')}
        <br />
        {t('rules.title_3')}
      </p>

      <p className="bold">{t('rules.title_4')}</p>
      <ul>
        {Array.from(list2).map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="bold">{t('rules.title_5')}</p>
      <ul>
        {Array.from(list3).map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>{common.t('contacts')}</h4>

      <p>
        <span>{common.t('address')}: </span>
        {t('rules.address')}
      </p>
      <p>
        <span>{common.t('phone')}: </span>
        {t('rules.phone')}
      </p>
      <p>
        <span>{common.t('fax')}: </span>
        {t('rules.fax')}
      </p>
      <p>
        <span>{common.t('site')}: </span>
        {t('rules.site')}
      </p>

      <p className="bold">{common.t('schedule')}</p>
      <p>
        {t('rules.work')}
        <br />
        {t('rules.work_2')}
        <br />
        {t('rules.desc_1')}
      </p>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'incoming'])),
  },
})

export default AdmissionRules
