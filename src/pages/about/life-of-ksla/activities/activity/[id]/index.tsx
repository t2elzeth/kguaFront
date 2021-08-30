import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DraftPage } from '@src/templates'
import Loader from '@src/components/Loader'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import fetchData from '@src/services/fetchData'

const Activity: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('about')

  const [data, setData] = useState(null)

  const fetch = useCallback(async () => {
    try {
      const res = await fetchData('events', { lang: router.locale }, `${router.query.id}`)
      setData(res)
    } catch (e) {
      console.log(e)
    }
  }, [router])

  useEffect(() => {
    fetch()
  }, [fetch])

  if (!data) {
    return <Loader />
  }

  return (
    <DraftPage pageName={t('')}>
      <div className="e-learning">
        <section></section>
      </div>
    </DraftPage>
  )
}

export async function getStaticPaths(props) {
  console.log('props: ', props)
  return {
    paths: [
      {
        params: { id: '1' },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'international-cooperation'])),
  },
})

export default Activity
