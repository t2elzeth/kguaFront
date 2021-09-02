import { memo } from 'react'

const InfoCount = () => {
  return (
    <div className="section-1__box">
      <div>
        <p className="headline-regular">
          <span>7 600</span>
          студентов обучаются на данный момент
        </p>
        <hr />
      </div>
      <div>
        <p className="headline-regular">
          <span>300</span>
          квалифицированных преподавателей
        </p>
        <hr />
      </div>
      <div>
        <p className="headline-regular">
          <span>20</span>
          доктора наук
        </p>
        <hr />
      </div>
      <div>
        <p className="headline-regular">
          <span>91</span>
          кандидаты наук
        </p>
      </div>
    </div>
  )
}

export default memo(InfoCount)
