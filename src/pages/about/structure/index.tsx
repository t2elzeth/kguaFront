import { WithoutSideBar } from '../../../templates'
import Link from 'next/link'
export type IndexPageProps = {}

const categories = [
  {
    title: "Ректорат",
    img: "/images/students-1.svg",
    route: '/about/structure/administration'
  },
  {
    title: "Учебные подразделения ",
    img: "/images/students-2.svg",
    route: '/structure'
  },
  {
    title: "Структурные подразделения",
    img: "/images/students-3.svg",
    route: '/about/structure/structural-units'
  },
  {
    title: "Кафедры",
    img: "/images/students-4.svg",
    route: '/about/structure/departments'
  },
]

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <WithoutSideBar pageName="Структура университета">
      <img src="/images/incoming-2.png" />
      <h2>
        Структура университета
      </h2>
      <p>
        Кыргызский государственный юридический университет (КГЮА) является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования и послевузовской подготовки кадров в сфере юриспруденции, экономики, управления и информационных технологий.
      </p>
      <div className="categories">
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
    </WithoutSideBar >
  )
}

export default IndexPage