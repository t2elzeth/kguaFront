import { WithoutSideBar } from '../../templates'

const categories = [
  {
    title: 'Кружки и клубы',
    img: '/images/students-1.svg',
  },
  {
    title: 'Налоговая и таможенная клиника',
    img: '/images/students-2.svg',
  },
  {
    title: 'Cтуденческий совет',
    img: '/images/students-3.svg',
  },
  {
    title: 'Уполномоченный по правам студентов',
    img: '/images/students-4.svg',
  },
  {
    title: 'Юридическая клиника',
    img: '/images/students-5.svg',
  },
]
const IndexPage = () => {
  return (
    <WithoutSideBar pageName="Студентам">
      <div className="students-page">
        <div className="slider">
          <img src="/images/financial.png" alt="" />
          <div>
            <h4>Студенческая совет</h4>
            <p>
              Студенческий совет КГЮА является студенческой организацией – одной из форм
              самоуправления студентов, созданной в соответствии с Конституцией КР, Законом КР «Об
              образовании», Уставом Университета и иными нормативными актами.
              <br />
              Миссией Студенческого совета КГЮА является реализация прав студентов на участие в
              управлении образовательным процессом, решении важных вопросов жизнедеятельности
              студенческой молодежи, развитии ее социальной активности, поддержки и реализации
              студенческих инициатив в жизни университета и гражданского общества.
            </p>
          </div>
        </div>
        <h2>Студентам</h2>
        <p>В настоящее время в составе КГЮА действуют следующие институты:</p>
        <div className="categories">
          {categories.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </WithoutSideBar>
  )
}
export default IndexPage
