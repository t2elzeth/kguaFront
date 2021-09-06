import { useState, useEffect, useCallback } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

import { IconButton } from '@material-ui/core'
import { Collapse } from '@Components'
import fetchData from '@src/services/fetchData'
import { WithoutSideBar } from '@src/templates'

const Personal = () => {
  const common = useTranslation('common')
  const { t } = useTranslation('about')
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
    <WithoutSideBar pageName={t('personal.title')}>
      <h2>{t('personal.title')}</h2>
      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
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
