import { CardDepartment } from '@src/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { WithoutSideBar } from '../../../../templates'

const Departments = () => {
  const { t } = useTranslation('about')
  const draft = t('structure.listDepartments', { returnObjects: true })
  return (
    <WithoutSideBar pageName="Кафедры">
      <h2>{t('structure.departments.title')}</h2>
      <p>{t('structure.departments.description')}</p>
      <div style={{ marginTop: 20 }}>
        <CardDepartment items={draft} />
      </div>
    </WithoutSideBar>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common'])),
  },
})

export default Departments
