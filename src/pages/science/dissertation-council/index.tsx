import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { AboutPage } from '@src/templates'
import { useCallback } from 'react'

const DissertationCouncil: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('science')

  const list = t('sidebar_list', { returnObjects: true })
  const list1 = t('dissertation_council.list_1', { returnObjects: true })
  const list2 = t('dissertation_council.list_1', { returnObjects: true })
  const list3 = t('dissertation_council.list_3', { returnObjects: true })
  const currentRoute = Array.from(list).find((item: any) => item.route === router.pathname)

  const tDis = useCallback(
    (translate: string) => {
      return t(`dissertation_council.${translate}`)
    },
    [t]
  )

  return (
    <AboutPage
      t={t}
      pageName={Object(currentRoute).name}
      pageTitle={Object(currentRoute).name}
      image="/images/science-title-2.png"
    >
      <section style={{ marginBottom: 50 }}>
        <p>{tDis('desc_1')}</p>
        <p>{tDis('desc_2')}</p>
        <p>{tDis('desc_3')}</p>
        <p>{tDis('desc_4')}</p>
        <p>{tDis('desc_5')}</p>
        <p>{tDis('desc_6')}</p>
        <p>{tDis('desc_7')}</p>
        <p>{tDis('desc_8')}</p>
        <p>{tDis('desc_9')}</p>
        <p>{tDis('desc_10')}</p>
        <h5>{tDis('title_1')}</h5>
        <ul>
          {Array.from(list1).map((item: string, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h5>{tDis('title_2')}</h5>
        <ul>
          {Array.from(list2).map((item: string, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h5>{tDis('title_3')}</h5>
        <ul>
          {Array.from(list3).map((item: string, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </AboutPage>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'science'])),
  },
})

export default DissertationCouncil
