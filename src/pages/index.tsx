import Head from 'next/head'
import { Header, News, Footer } from '@Components'
import Image from 'next/image'

export type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <div className="main">
      <Head>
        <title>
          Главная
        </title>
      </Head>
      <Header />
      <section className="section-1">
        <div className="section-1__wrapper">
          <div className="section-1__text">
            <h4>ДОБРО ПОЖАЛОВАТЬ</h4>
            <h1>В КЫРГЫЗСКИЙ ГОСУДАРСТВЕННЫЙ ЮРИДИЧЕСКИЙ УНИВЕРСИТЕТ</h1>
            <p className="headline-regular">
              КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования Указом Президента Кыргызской Республики от 12.08.2003г. УП № 264 на базе Центра повышения квалификации
          </p>
            {/* <button>
              <img src="/images/arrow.svg" alt="arrow" />
              Узнать больше
          </button> */}
          </div>
          <div className="section-1__box">
            <div>
              <p className="headline-regular">
                <span>
                  47
                </span>
                Информирование <br />о мероприятиях в КГЮА
              </p>
              <hr />
            </div>
            <div>
              <p className="headline-regular">
                <span>5</span>
                Информирование <br />о мероприятиях в КГЮА
              </p>
              <hr />
            </div>
            <div>
              <p className="headline-regular">
                <span>6</span>
                Информирование<br /> о мероприятиях в КГЮА
              </p>
              <hr />
            </div>
            <div>
              <p className="headline-regular">
                <span>2500</span>
                Информирование <br />о мероприятиях в КГЮА
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="wrapper">
          <div className="section-2__text">
            <h2>О нас</h2>
            <p className="text-regular">КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования Указом Президента Кыргызской Республики от 12.08.2003г. УП № 264 на базе Центра повышения квалификации прокурорско-следственных работников Генеральной прокуратуры Кыргызской Республики и Института переподготовки и повышения квалификации кадров Кыргызского национального университета им. Ж.Баласагына.
            Учредителем КГЮА является Правительство Кыргызской Республики.
            Постановлением Правительства Кыргызской Республики от 23 июля 2019 года №367 изменены статус и наименование КГЮА в учреждение «Кыргызский государственный юридический университет (КГЮА)», утвержден Устав и получено свидетельство о перерегистрации юридического лица.
            </p>
          </div>
          <Image width="636px" height="656px" src="/images/second-section.png" />
        </div>
        <p className="section-2__bottom">
          <img src='/images/logo.png' alt="logo" />
          КГЮА - уверенный шаг в будущее !
        </p>
      </section>
      <section className="section-3">
        <h2>
          <span>
            Учебные подразделения
          </span>
        </h2>
        <div className="wrapper">
          <div className="section-3__left-part">
            <Image width="500px" height="878px" src="/images/third-section.png" />
          </div>
          <div className="section-3__right-part">
            <div className="section-3__block">
              <div className="section-3__logo">
                <img src="/images/faculty-logo-1.png" alt="company-logo" />
              </div>
              <div className="section-3__block-text">
                <h4>
                  ИНСТИТУТ ЭКОНОМИКИ И УПРАВЛЕНИЯ
                </h4>
                <p>
                  КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования
                </p>
              </div>
            </div>

            <div className="section-3__block">
              <div className="section-3__logo">
                <img src="/images/faculty-logo-2.png" alt="company-logo" />
              </div>
              <div className="section-3__block-text">
                <h4>
                  ИНСТИТУТ АДВОКАТУРЫ И ЮСТИЦИИ
                </h4>
                <p className="headline-regular">
                  КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования
                </p>
              </div>
            </div>
            <div className="section-3__block">
              <div className="section-3__logo">
                <img src="/images/faculty-logo-3.png" alt="company-logo" />
              </div>
              <div className="section-3__block-text">
                <h4>
                  ИНСТИТУТ ЭКОНОМИКИ И УПРАВЛЕНИЯ
                </h4>
                <p className="headline-regular">
                  КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования
                </p>
              </div>
            </div>
            <div className="section-3__block">
              <div className="section-3__logo">
                <img src="/images/faculty-logo-4.png" alt="company-logo" />
              </div>
              <div className="section-3__block-text">
                <h4>
                  ИНСТИТУТ ПРАВОСУДИЯ И ПРОКУРАТУРЫ
                </h4>
                <p className="headline-regular">
                  КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <News />
      <section className="section-5">
        {[...Array(6).keys()].map((index) => (
          <img src={`/images/fifth-section-${index + 1}.png`} />
        ))}
      </section>
      <Footer />
    </div >
  )
}
export default IndexPage