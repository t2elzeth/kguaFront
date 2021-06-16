import { StructurePage } from '../../../templetes'
import { Collapse } from 'react-collapse'

const departments = [
  {
    title: "Департамент правосудия и правоохранительной деятельности ​",
    route: ""
  },
  {
    title: "Департамент частного права",
    route: ""
  },
  {
    title: "Департамент международных отношений и международного права ​",
    route: ""
  },
  {
    title: "Юридический колледж ​",
    route: ""
  },
]
const IndexPage = () => {
  return (
    <StructurePage pageName='Высшая школа права'>
      <div className="structure-page__financial">
        <div className="structure-page__slider">
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
          Высшая школа права
        </h2>
        <p>
          В настоящее время в составе КГЮА действуют следующие институты:
        </p>
        <div className='structure-page__departments'>
          {departments.map((item) => (
            <div >
              <p>
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <h3>
          Персонал
        </h3>
        <Collapse isOpened={true}>
          <p>Paragraph of text</p>
          <p>Another paragraph is also OK</p>
          <p>Images and any other content are ok too</p>
        </Collapse>
      </div>
    </StructurePage>
  )
}
export default IndexPage