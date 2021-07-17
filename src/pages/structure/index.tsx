import WithoutSideBar from '../../templates/WithoutSideBar'

const institutions = [
  {
    title: 'Инситут бизнес права',
    img: '/images/faculty-logo-1.png',
    route: 'structure/departments/business-law',
  },
  {
    title: 'Институт адвокатуры и юстиции',
    img: '/images/faculty-logo-3.png',
    route: 'structure/departments/law',
  },
  {
    title: 'IT-Академия',
    img: '/images/faculty-logo-4.png',
    route: 'structure/departments/it',
  },
  {
    title: 'Институт международного права и международных отношений​',
    img: '/images/faculty-logo-2.png',
    route: 'structure/departments/international-relations',
  },
  {
    title: 'Институт правосудия и прокуратуры​',
    img: '/images/faculty-logo-5.png',
    route: 'structure/departments/prosecution',
  },
  {
    title: 'Институт экономики и управления',
    img: '/images/faculty-logo-6.png',
    route: 'structure/departments/economics-management',
  },
  // {
  //   title: 'Факультет медиа и коммуникаций',
  //   img: '/images/faculty-logo-7.png',
  // },
  // {
  //   title: 'Факультет дополнительных образовательных программ ​',
  //   img: '/images/faculty-logo-8.png',
  //   route: '',
  // },
  // {
  //   title: 'Академический лицей ',
  //   img: '/images/faculty-logo-9.png',
  //   route: '',
  // },
  // {
  //   title: 'Профессиональный лицей 99',
  //   img: '/images/faculty-logo-10.png',
  //   route: '',
  // },
  // {
  //   title: 'Иссык-Кульский юридический институт ',
  //   img: '/images/faculty-logo-11.png',
  //   route: '',
  // },
]

const IndexPage: React.FC = () => {
  return (
    <WithoutSideBar pageName="Структура университета">
      <h2>Структура университета</h2>
      <p className="structure-page__subtitle">
        В настоящее время в составе КГЮА действуют следующие институты:
      </p>
      <div className="structure-page__institutes">
        {institutions.map((item, index) => (
          <a href={item.route} key={index}>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </WithoutSideBar>
  )
}

export default IndexPage
