import { StructurePage } from '../../templetes'

export type IndexPageProps = {}

const institutions = [
  {
    title: 'Высшая школа права​',
    img: '/images/third-section-logo-1.png',
    route: "structure/departments"
  },
  {
    title: 'Высшая школа экономики и бизнеса​',
    img: '/images/third-section-logo-3.png',
    route: ""
  },
  {
    title: 'Высшая IT-школа​ ',
    img: '/images/third-section-logo-4.png',
    route: ""
  },
  {
    title: 'Факультет заочного и дистанционного обучения ​',
    img: '/images/third-section-logo-2.png',
    route: ""
  },
  {
    title: 'Институт магистратуры и Phd-программ ​',
    img: '',
    route: ""
  },
  {
    title: 'Факультет социальных наук',
    img: ''
  },
  {
    title: 'Факультет медиа и коммуникаций',
    img: '',
    route: ""
  },
  {
    title: 'Факультет дополнительных образовательных программ ​',
    img: '',
    route: ""
  },
  {
    title: 'академический лицей ',
    img: '',
    route: ""
  },
  {
    title: 'Профессиональный лицей 99',
    img: '',
    route: ""
  },
  {
    title: 'Иссык-Кульский юридический институт ',
    img: '',
    route: ""
  },
]

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <StructurePage pageName="Структура университета">
      <h2>
        Структура университета
      </h2>
      <p>
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
    </StructurePage>
  )
}

export default IndexPage