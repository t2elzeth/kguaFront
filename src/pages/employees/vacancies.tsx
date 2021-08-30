import { AboutPage } from '../../templates'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import VacanciesCard from '@src/components/VacanciesCard'
import fetchData from '@src/services/fetchData'

const Vacancies: React.FC = ({ data }: any) => {
  const { t } = useTranslation('employees')
  const router = useRouter()
  const list = t('sidebar_list', { returnObjects: true })
  const currentData = [list].find((item: any) => item.route === router.pathname)

  return (
    <AboutPage
      t={t}
      pageName={Object(currentData).name}
      pageTitle={Object(currentData).name}
      image="/images/documents.png"
    >
      <p>{Object(currentData).description}</p>
      <h3>Вакансии</h3>
      {data &&
        Array.from(data).map((item: any, index: number) => (
          <VacanciesCard key={index} img={item.image} title={item.title} desc={item.description} />
        ))}
    </AboutPage>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetchData('vacancies', { lang: context.locale })

  return {
    props: {
      data: res,
      ...(await serverSideTranslations(context.locale, ['common', 'employees'])),
    },
  }
}

export default Vacancies
