import { memo } from 'react'

const InfoCount = () => {
  return (
    <div className="section-1__box">
      <div>
        <p className="headline-regular">
          <span>47</span>
          Информирование <br />о мероприятиях в КГЮА
        </p>
        <hr />
      </div>
      <div>
        <p className="headline-regular">
          <span>5</span>
          Информирование <br />о мероприятиях в КГЮА
        </p>
        <hr />
      </div>
      <div>
        <p className="headline-regular">
          <span>6</span>
          Информирование
          <br /> о мероприятиях в КГЮА
        </p>
        <hr />
      </div>
      <div>
        <p className="headline-regular">
          <span>2500</span>
          Информирование <br />о мероприятиях в КГЮА
        </p>
      </div>
    </div>
  )
}

export default memo(InfoCount)
