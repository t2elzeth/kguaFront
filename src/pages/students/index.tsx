import { StructurePage } from '../../templetes'

const categories = [
  {
    title: "График учебного процесса",
    img: "/images/students-1.svg",
  },
  {
    title: "Документы обучающемуся",
    img: "/images/students-2.svg",
    whiteImg: '',
  },
  {
    title: "Студенческое самоуправление ",
    img: "/images/students-3.svg",
    whiteImg: '',
  },
  {
    title: "Практика и трудоустройство",
    img: "/images/students-4.svg",
    whiteImg: '',
  },
  {
    title: "Юридическая клиника",
    img: "/images/students-5.svg",
    whiteImg: '',
  },
  {
    title: "Иностранным студентам",
    img: "/images/students-6.svg",
    whiteImg: '',
  },
  {
    title: "Кружки и клубы",
    img: "/images/students-7.svg",
    whiteImg: '',
  }
]
const IndexPage = () => {
  return (
    <StructurePage pageName='Студентам'>
      <div className="students-page">
        <div className="students-page__slider">
          <img src='/images/financial.png' />
          <div>
            <h4>Студенческая совет</h4>
            <p>
              Студенческий совет КГЮА является студенческой организацией – одной из форм самоуправления студентов, созданной в соответствии  с Конституцией КР, Законом КР «Об образовании», Уставом Университета и иными нормативными актами.
              <br />
              Миссией Студенческого совета КГЮА является реализация прав студентов на участие в управлении образовательным процессом, решении важных вопросов жизнедеятельности студенческой молодежи, развитии ее социальной активности, поддержки и реализации студенческих инициатив в жизни университета и гражданского общества.
          </p>
          </div>
        </div>
        <h2>
          Студентам
        </h2>
        <p>
          В настоящее время в составе КГЮА действуют следующие институты:
        </p>
        <div className="students-page__categories">
          {categories.map((item) => (
            <div>
              <img src={item.img} />
              <p>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </StructurePage>
  )
}
export default IndexPage