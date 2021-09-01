import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import WithoutSideBar from '../templates/WithoutSideBar'

const IndexPage: React.FC = () => {
  const { t } = useTranslation('contacts')

  return (
    <WithoutSideBar pageName="Контакты">
      <h2>{t('main')}</h2>
      <img src="/images/symbolism.png" alt="" />
      <p style={{ fontSize: '18px', lineHeight: '32px' }} className="contacts">
        <b> Отдел по внеучебной работе:</b>+996 312 392 105 <br />
        <b>Центр карьеры: </b>+996 312 392102
        <br />
        <b> Бухгалтерия:</b> 0312 392 259
        <br />
        <b> ИПЦ “Мастерская права”: </b>+996 556 888 821
        <br /> <b>Общий отдел: </b>+996 (312) 39 20 93
        <br />
        <b>Отдел кадров: </b> +996 312 39 18 26
        <br />
        <b>Отдел сопровождения образовательного процесса :</b>:+996 (312) 391887
        <br />
        <b> Отдел аспирантуры, докторантуры :</b>+996 (312) 39-19-92
        <br />
        <b> Юридический колледж: </b>- +996 (0312) 391 846
        <br />
        <b>Институт Бизнес-прав:</b>- +996 312 392 257 <br />
        <b>Факультет Заочного и дистанционного обучения:</b>- +996 (312) 392 108
        <br />
        <b>Следственно-криминалистический институт: </b>- 0312 52 92 07 <br />
        <b>IT-Академия:</b> +996 700 540 202, +996 700 406 730 <br />
        <b>Институт международного права и международных отношений: </b>- +996 772 675 593
        <br />
        <b>Профессиональный лицей №99 :</b>+996 (312) 53 38 98
        <br />
        <b>Институт экономики и управления: </b> +996 (0312) 52-92-50
        <br /> <b>Иссык-Кульский юридический институт :</b> 03922 5 39 14 <br />
        <b>Институт правосудия и прокуратуры :</b> +996 (312) 392 097 <br />
        <b>Институт Адвокатуры и юстиции:</b> +996 (312) 391 905
      </p>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['contacts', 'common'])),
  },
})

export default IndexPage
