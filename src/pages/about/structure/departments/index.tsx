import { CardDepartment } from '@src/components'
import fetchData from '@src/services/fetchData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { WithoutSideBar } from '../../../../templates'

const Departments = ({ data }: any) => {
  console.log('data: ', data)
  const { t } = useTranslation('about')
  const draft = t('structure.listDepartments', { returnObjects: true })
  return (
    <WithoutSideBar pageName="Кафедры">
      <h2>{t('structure.departments.title')}</h2>
      <p>{t('structure.departments.description')}</p>
      <div style={{ marginTop: 20 }}>
        <CardDepartment items={data} />
      </div>
    </WithoutSideBar>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetchData('department', { lang: context.locale })
  return {
    props: {
      data: res,
      ...(await serverSideTranslations(context.locale, ['about', 'common'])),
    },
  }
}

export default Departments
