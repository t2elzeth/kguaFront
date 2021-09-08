import { useCallback, useEffect, useState } from 'react'
import { useRouter, withRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { StructuralUnitPage } from '@src/templates'
import fetchData from '@src/services/fetchData'
import Loader from '@src/components/Loader'

const StructuralUnit = () => {
  const router = useRouter()

  const [data, setData] = useState(null)
  const [list, setList] = useState([])

  const fetch = useCallback(async () => {
    try {
      const res = await fetchData('structural_unit', { lang: router.locale }, `${router.query.id}`)
      setData(res)
    } catch (e) {
      console.log(e)
    }
  }, [router])

  useEffect(() => {
    fetch()
  }, [fetch])

  const fetchList = useCallback(async () => {
    try {
      const res = await fetchData('structural_unit', { lang: router.locale })
      setList(res)
    } catch (e) {
      console.log(e)
    }
  }, [router])

  useEffect(() => {
    fetchList()
  }, [fetchList])

  if (!data || !list.length) {
    return <Loader />
  }

  return (
    <StructuralUnitPage
      links={list}
      currentDepartments={data}
      pageName={Object(data).title}
      pageTitle={Object(data).title}
      image="/images/about/structure/structural-units/structural-unit-info-page-hero.png"
    />
  )
}

// pages/blog/[slug].js
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: '2' },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  // if (!context.params.id) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['about', 'common'])),
    },
  }
}

export default withRouter(StructuralUnit)
