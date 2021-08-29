import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { WithoutSideBar } from '../../templates'

import { Collapse } from '@Components'
import fetchData from '@src/services/fetchData'
import { IconButton } from '@material-ui/core'
import { useState } from 'react'

const alphabet = ['A', 'Б', 'В', 'Г']

const Personal = ({ data }: any) => {
  const [state, setState] = useState(null)

  const handleClick = (item) => () => {
    setState(item)
  }
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
  const res = await fetchData('staff', { lang: context.locale, full_name: context.state })
  return {
    props: {
      data: res,
      ...(await serverSideTranslations(context.locale, ['common', 'about'])),
    },
  }
}

export default Personal
