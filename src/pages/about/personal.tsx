import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { WithoutSideBar } from '../../templates'

import fetchData from '@src/services/fetchData'
import { IconButton } from '@material-ui/core'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Collapse } from '@Components'

const alphabet = ['A', 'Б', 'В', 'Г']

const Personal = () => {
  const router = useRouter()
  const [state, setState] = useState(null)
  const [data, setData] = useState([])

  const handleClick = (item) => () => {
    setState(item)
  }

  const fetch = useCallback(async () => {
    try {
      const res = await fetchData('staff', { lang: router.locale, full_name: state })
      setData(res)
    } catch (e) {
      console.log(e)
    }
  }, [router, state])

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <WithoutSideBar pageName="Персонал">
      <h2>Персонал</h2>
      <div style={{ display: 'flex' }}>
        {Array.from(alphabet).map((item: any, index: number) => (
          <span key={index}>
            <IconButton
              color={item === state ? 'secondary' : 'primary'}
              onClick={handleClick(item)}
            >
              {item}
            </IconButton>
          </span>
        ))}
      </div>

      <Collapse items={data} />
    </WithoutSideBar>
  )
}

export const getStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'about'])),
    },
  }
}

export default Personal
