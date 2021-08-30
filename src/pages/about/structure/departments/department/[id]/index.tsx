import { useRouter, withRouter } from 'next/router'

import { DepartmentsPage } from '@src/templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import fetchData from '@src/services/fetchData'
import { useCallback, useEffect, useState } from 'react'
import Loader from '@src/components/Loader'

const Department = () => {
  const router = useRouter()

  const [data, setData] = useState(null)
  const [list, setList] = useState([])

  const fetch = useCallback(async () => {
    try {
      const res = await fetchData('department', { lang: router.locale }, `${router.query.id}`)
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
      const res = await fetchData('department', { lang: router.locale })
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
    <DepartmentsPage
      links={list}
      currentDepartments={data}
      pageName={Object(data).title}
      pageTitle={Object(data).title}
      image="/images/symbolism.png"
    />
  )
}

// pages/blog/[slug].js
export async function getStaticPaths(props) {
  console.log('props: ', props)
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

export default withRouter(Department)
