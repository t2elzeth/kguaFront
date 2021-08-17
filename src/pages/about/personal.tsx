import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { WithoutSideBar } from '../../templates'

export type PersonalProps = {}

const Personal: React.FC<PersonalProps> = () => {
  return <WithoutSideBar pageName="Документы">Personal</WithoutSideBar>
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})

export default Personal
