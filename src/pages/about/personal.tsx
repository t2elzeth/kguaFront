import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { WithoutSideBar } from '../../templates'

import fetchData from '@src/services/fetchData'
import { IconButton } from '@material-ui/core'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Collapse } from '@Components'
import { useTranslation } from 'react-i18next'

const Personal = () => {
  const common = useTranslation('common')
  const router = useRouter()
  const [state, setState] = useState(null)
  const [data, setData] = useState([])

  const alphabet = common.t('alphabet', { returnObjects: true })

  const handleClick = (item) => () => {
    if (item === state) {
      setState(null)
    } else {
      setState(item)
    }
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
      <div style={{ display: 'flex', width: '100%' }}>
        {Array.from(alphabet).map((item: any, index: number) => (
          <IconButton
            key={index}
            color={item === state ? 'secondary' : 'inherit'}
            onClick={handleClick(item)}
          >
            {item}
          </IconButton>
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
