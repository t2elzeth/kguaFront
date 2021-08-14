import { CardDepartment } from '@src/components'
import { WithoutSideBar } from '../../../../templates'

const mock = [
  {
    title: 'Кафедра Административного, финансового и информационного права',
    name: 'к.ю.н., и.о. доцента Герасько Виктор Владимирович ',
    contacts: 'Адрес  пр. Чуй 180а., тел: 0312 392 093., почта: afip.ksla@gmail.com',
  },
  {
    title: 'Кафедра Административного, финансового и информационного права',
    name: 'к.ю.н., и.о. доцента Герасько Виктор Владимирович ',
    contacts: 'Адрес  пр. Чуй 180а., тел: 0312 392 093., почта: afip.ksla@gmail.com',
  },
]

const Departments = () => {
  return (
    <WithoutSideBar pageName="Кафедры">
      <h2>Кафедры</h2>
      <p>
        Реализацию образовательных программ КГЮА обеспечивают 18 кафедр, где работает
        высококвалифицированный профессорско-преподавательский состав
      </p>
      <div style={{ marginTop: 20 }}>
        <CardDepartment items={mock} />
      </div>
    </WithoutSideBar>
  )
}
export default Departments
