import { AboutPage } from '../../templates'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const { t } = useTranslation('about')

  const sidebarLinks = t('sidebar_list', { returnObjects: true })

  return (
    <AboutPage
      pageName="О КГЮА"
      pageTitle="Основные сведения"
      links={sidebarLinks}
      image="/images/kgua-info.png"
    >
      <p>{t('main')}</p>
      <div className="about-page__numbers">
        <div>
          <p>
            <span>47</span>
            Информирование о мероприятиях в КГЮА
          </p>
        </div>
        <div>
          <p>
            <span>5</span>
            Информирование о мероприятиях в КГЮА
          </p>
        </div>
        <div>
          <p>
            <span>6</span>
            Информирование о мероприятиях в КГЮА
          </p>
        </div>
        <div>
          <p>
            <span>2500</span>
            Информирование о мероприятиях в КГЮА
          </p>
        </div>
      </div>
      <img src="/images/kgua-info-2.png" className="mainImage" />
      {/* <p>
        КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения
        качества юридического образования Указом Президента Кыргызской Республики от 12.08.2003г. УП
        № 264 на базе Центра повышения квалификации прокурорско-следственных работников Генеральной
        прокуратуры Кыргызской Республики и Института переподготовки и повышения квалификации кадров
        Кыргызского национального университета им. Ж.Баласагына. Учредителем КГЮА является
        Правительство Кыргызской Республики.
      </p> */}
    </AboutPage>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default IndexPage
