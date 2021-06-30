import { StructurePage } from '../../../templetes'
import Link from 'next/link'
export type IndexPageProps = {}

const categories = [
  {
    title: "Ректорат",
    img: "/images/students-1.svg",
  },
  {
    title: "Учебные подразделения ",
    img: "/images/students-2.svg",
  },
  {
    title: "Структурные подразделения",
    img: "/images/students-3.svg",
  },
  {
    title: "Кафедры",
    img: "/images/students-4.svg",
  },
]

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <StructurePage pageName="Структура университета">
      <img src="/images/incoming-2.png" />
      <h2>
        Структура университета
      </h2>
      <p>
        Кыргызский государственный юридический университет (КГЮА) является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования и послевузовской подготовки кадров в сфере юриспруденции, экономики, управления и информационных технологий.
      </p>
      <div className="categories">
        {categories.map((item) => (
          <Link href="/">
            <a>
              <img src={item.img} />
              <p>
                {item.title}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </StructurePage >
  )
}

export default IndexPage