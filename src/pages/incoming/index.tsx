import { StructurePage } from '../../templetes'
import Link from 'next/link'

const categories = [
  {
    title: "Правила приёма в КГЮА",
    img: "/images/students-2.svg",
    route: '/incoming/admission-rules'
  },
  {
    title: "Среднее профессиональное образование ",
    img: "/images/students-3.svg",
    route: '/incoming/secondary-education'
  },
  {
    title: "Бакалавриат; Специалитет; Магистратура",
    img: "/images/students-4.svg",
    route: '/incoming/bachelor-degree'
  },
  {
    title: "Аспирантура и докторантура",
    img: "/images/students-5.svg",
    route: '/incoming/graduate-school'
  },
]
const IndexPage = () => {
  return (
    <StructurePage pageName='Поступающим'>
      <div className="incoming-page">
        <div className="incoming-page__slider">
          <img src='/images/incoming-1.png' />
          <div>
            <h4>АСПИРАНТУРА</h4>
            <p>
              В КГЮА также осуществляется подготовка научно-педагогических кадров высшей квалификации в рамках аспирантуры по направлению «Юриспруденция».<br />
              Аспирантура является основной формой подготовки научно-педагогических и научных кадров в системе послевузовского профессионального образования предоставляет гражданам возможность повышения уровня образования, научной, педагогической квалификации на базе высшего профессионального образования.
          </p>
          </div>
        </div>
        <h2>
          Поступающим
        </h2>
        <p>
          В настоящее время в составе КГЮА действуют следующие институты:
        </p>
        <div className="incoming-page__categories">
          {categories.map((item) => (
            <Link href={item.route}>
              <a>
                <img src={item.img} />
                <p>
                  {item.title}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </StructurePage >
  )
}
export default IndexPage