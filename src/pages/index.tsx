import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InfoCount from '@src/components/InfoCount'
import Carousel from 'react-material-ui-carousel'

const IndexPage: React.FC = () => {
  const { t } = useTranslation('index')
  const common = useTranslation('common')

  const international = useTranslation('international-cooperation')

  const faculties = common.t('faculties', { returnObjects: true })
  const partners = international.t('partners', { returnObjects: true })

  const newFaculties = Array.from(faculties)
    .map((item, i, arr) => {
      if (i === 0 || i % 3 === 0) {
        return (
          <>
            <Item item={item} />
            <Item item={arr[i + 1]} />
            <Item item={arr[i + 2]} />
          </>
        )
      } else {
        return null
      }
    })
    .filter((el) => el !== null)

  const newPartners = Array.from(partners)
    .map((item, i, arr) => {
      if (i === 0 || i % 5 === 0) {
        return (
          <>
            <ItemPartner item={item} />
            <ItemPartner item={arr[i + 1]} />
            <ItemPartner item={arr[i + 2]} />
            <ItemPartner item={arr[i + 3]} />
            <ItemPartner item={arr[i + 4]} />
            <ItemPartner item={arr[i + 5]} />
          </>
        )
      } else {
        return null
      }
    })
    .filter((el) => el !== null)

  return (
    <div className="main">
      <Head>
        <title>Главная</title>
      </Head>
      <section className="section-1">
        <div className="section-1__wrapper">
          <div className="section-1__text">
            <h4>{t('welcome')}</h4>
            <h1>{t('ksla')}</h1>
            <p className="headline-regular" style={{ color: '#fff', textAlign: 'left' }}>
              {t('desc')}
            </p>
            {/* <button>
              <img src="/images/arrow.svg" alt="arrow" />
              Узнать больше
          </button> */}
          </div>
          <InfoCount />
        </div>
      </section>
      <section className="section-2">
        <div className="wrapper">
          <div className="section-2__text">
            <h2>{t('about_us_1')}</h2>
            <p className="text-regular">{t('desc')}</p>
          </div>
          <Image width="636px" height="656px" src="/images/second-section.png" />
        </div>
        <p className="section-2__bottom">
          <img src="/images/logo.png" alt="logo" />
          {t('motto')}
        </p>
      </section>
      <section className="section-3">
        <h2>
          <span>{t('training_units')}</span>
        </h2>
        <div className="wrapper">
          <div className="section-3__left-part">
            <Image width="500px" height="878px" src="/images/third-section.png" />
          </div>
          <div className="section-3__right-part">
            <Carousel>{newFaculties}</Carousel>
          </div>
        </div>
      </section>
      {/* <News /> */}
      <section className="section-5">
        <Carousel className="w-100" autoPlay={false}>
          {newPartners}
        </Carousel>
      </section>
    </div>
  )
}

function Item(props) {
  return (
    <>
      {props.item?.route ? (
        <div className="section-3__block">
          <div className="section-3__logo">
            <img src={props.item?.img} alt="company-logo" />
          </div>
          <div className="section-3__block-text">
            <h4>{props.item?.name}</h4>

            <p style={{ padding: '10px 0' }}>{props.item?.desc_1}</p>
          </div>
        </div>
      ) : null}
    </>
  )
}

function ItemPartner(props) {
  return <img className="partnerImage" alt="" src={props.item?.img} />
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['index', 'common', 'international-cooperation'])),
  },
})

export default IndexPage
