import { WithoutSideBar } from '../../templates'

export type IndexPageProps = {}

const institutions = [
  {
    title: 'Высшая школа права​',
    img: '/images/faculty-logo-1.png',
    route: "structure/departments"
  },
  {
    title: 'Высшая школа экономики и бизнеса​',
    img: '/images/faculty-logo-3.png',
    route: ""
  },
  {
    title: 'Высшая IT-школа​ ',
    img: '/images/faculty-logo-4.png',
    route: ""
  },
  {
    title: 'Факультет заочного и дистанционного обучения ​',
    img: '/images/faculty-logo-2.png',
    route: ""
  },
  {
    title: 'Институт магистратуры и Phd-программ ​',
    img: '/images/faculty-logo-5.png',
    route: ""
  },
  {
    title: 'Факультет социальных наук',
    img: '/images/faculty-logo-6.png'
  },
  {
    title: 'Факультет медиа и коммуникаций',
    img: '/images/faculty-logo-7.png',
    route: ""
  },
  {
    title: 'Факультет дополнительных образовательных программ ​',
    img: '/images/faculty-logo-8.png',
    route: ""
  },
  {
    title: 'Академический лицей ',
    img: '/images/faculty-logo-9.png',
    route: ""
  },
  {
    title: 'Профессиональный лицей 99',
    img: '/images/faculty-logo-10.png',
    route: ""
  },
  {
    title: 'Иссык-Кульский юридический институт ',
    img: '/images/faculty-logo-11.png',
    route: ""
  },
]

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <WithoutSideBar pageName="Структура университета">
      <h2>
        Структура университета
      </h2>
      <p className="structure-page__subtitle">
        В настоящее время в составе КГЮА действуют следующие институты:
      </p>
      <div className="structure-page__institutes">
        {institutions.map((item) => (
          <a href={item.route}>
            <img src={item.img} />
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </WithoutSideBar>
  )
}

export default IndexPage