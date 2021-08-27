import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InfoCount from '@src/components/InfoCount'

const IndexPage: React.FC = () => {
  const { t } = useTranslation('index')
  return (
    <div className="main">
      <Head>
        <title>Главная</title>
      </Head>
      <section className="section-1">
        <div className="section-1__wrapper">
          <div className="section-1__text">
            <h4>{t('welcome')}</h4>
            <h1>В КЫРГЫЗСКИЙ ГОСУДАРСТВЕННЫЙ ЮРИДИЧЕСКИЙ УНИВЕРСИТЕТ</h1>
            <p className="headline-regular" style={{ color: '#fff', textAlign: 'left' }}>
              КГЮА образован в целях совершенствования системы подготовки юридических кадров и
              повышения качества юридического образования Указом Президента Кыргызской Республики от
              12.08.2003г. УП № 264 на базе Центра повышения квалификации
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
            <h2>О нас</h2>
            <p className="text-regular">
              КГЮА образован в целях совершенствования системы подготовки юридических кадров и
              повышения качества юридического образования Указом Президента Кыргызской Республики от
              12.08.2003г. УП № 264 на базе Центра повышения квалификации прокурорско-следственных
              работников Генеральной прокуратуры Кыргызской Республики и Института переподготовки и
              повышения квалификации кадров Кыргызского национального университета им. Ж.Баласагына.
              Учредителем КГЮА является Правительство Кыргызской Республики. Постановлением
              Правительства Кыргызской Республики от 23 июля 2019 года №367 изменены статус и
              наименование КГЮА в учреждение «Кыргызский государственный юридический университет
              (КГЮА)», утвержден Устав и получено свидетельство о перерегистрации юридического лица.
            </p>
          </div>
          <Image width="636px" height="656px" src="/images/second-section.png" />
        </div>
        <p className="section-2__bottom">
          <img src="/images/logo.png" alt="logo" />
          КГЮА - уверенный шаг в будущее !
        </p>
      </section>
      <section className="section-3">
        <h2>
          <span>Учебные подразделения</span>
        </h2>
        <div className="wrapper">
          <div className="section-3__left-part">
            <Image width="500px" height="878px" src="/images/third-section.png" />
          </div>
          <div className="section-3__right-part">
            <div className="section-3__block">
              <div className="section-3__logo">
                <img src="images/faculty-logo-1.png" alt="company-logo" />
              </div>
              <div className="section-3__block-text">
                <h4>ИНСТИТУТ ЭКОНОМИКИ И УПРАВЛЕНИЯ</h4>
                <p style={{ padding: '10px 0' }}>
                  КГЮА образован в целях совершенствования системы подготовки юридических кадров и
                  повышения качества юридического образования
                </p>
              </div>
            </div>

            <div className="section-3__block">
              <div className="section-3__logo">
                <img src="/images/faculty-logo-2.png" alt="company-logo" />
              </div>
              <div className="section-3__block-text">
                <h4>ИНСТИТУТ АДВОКАТУРЫ И ЮСТИЦИИ</h4>
                <p style={{ padding: '10px 0' }}>
                  КГЮА образован в целях совершенствования системы подготовки юридических кадров и
                  повышения качества юридического образования
                </p>
              </div>
            </div>
            <div className="section-3__block">
              <div className="section-3__logo">
                <img src="/images/faculty-logo-3.png" alt="company-logo" />
              </div>
              <div className="section-3__block-text">
                <h4>ИНСТИТУТ ЭКОНОМИКИ И УПРАВЛЕНИЯ</h4>
                <p style={{ padding: '10px 0' }}>
                  КГЮА образован в целях совершенствования системы подготовки юридических кадров и
                  повышения качества юридического образования
                </p>
              </div>
            </div>
            <div className="section-3__block">
              <div className="section-3__logo">
                <img src="/images/faculty-logo-4.png" alt="company-logo" />
              </div>
              <div className="section-3__block-text">
                <h4>ИНСТИТУТ ПРАВОСУДИЯ И ПРОКУРАТУРЫ</h4>
                <p style={{ padding: '10px 0' }}>
                  КГЮА образован в целях совершенствования системы подготовки юридических кадров и
                  повышения качества юридического образования
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <News /> */}
      <section className="section-5">
        {[...Array(6).keys()].map((index) => (
          <img key={index} alt="" src={`/images/fifth-section-${index + 1}.png`} />
        ))}
      </section>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['index', 'common'])),
  },
})

export default IndexPage
