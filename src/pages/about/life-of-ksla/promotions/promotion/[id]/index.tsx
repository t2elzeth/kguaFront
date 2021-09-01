import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DraftPage } from '@src/templates'
import Loader from '@src/components/Loader'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import fetchData from '@src/services/fetchData'
import { Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

const Promotion: React.FC = () => {
  const router = useRouter()

  const [data, setData] = useState(null)

  const fetch = useCallback(async () => {
    try {
      const res = await fetchData('promotion', { lang: router.locale }, `${router.query.id}`)
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
    <DraftPage pageName={Object(data).title}>
      <div className="e-learning">
        <section>
          <h2>{Object(data).title} </h2>
          <Carousel>
            {Object(data).images?.length &&
              Object(data).images.map((item, i) => <Item key={i} item={item} />)}
          </Carousel>

          <p
            style={{ fontWeight: 'normal', fontSize: '14px', lineHeight: '5px', color: '#575757' }}
          >
            {`${Object(data).date_from} - ${Object(data).date_to}`}
          </p>
          <p>{Object(data).description}</p>
        </section>
      </div>
    </DraftPage>
  )
}

function Item(props) {
  return (
    <Paper>
      <img style={{ width: '100%' }} alt="" src={props.item.image} />
    </Paper>
  )
}

export async function getStaticPaths() {
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
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default Promotion
