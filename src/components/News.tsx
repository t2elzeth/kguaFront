import { useState } from 'react'
import classnames from 'classnames'

const news = [
  {
    img: "/images/news-section-1.png",
    date: '21 марта 20 21',
    title: "КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования",
    article: " Кыргызский государственный юридический университет (КГЮА) является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования"
  },
  {
    img: "/images/news-section-1.png",
    date: '21 марта 20 21',
    title: "КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования",
    article: " Кыргызский государственный юридический университет (КГЮА) является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования"
  },
  {
    img: "/images/news-section-3.png",
    date: '21 марта 20 21',
    title: "КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования",
    article: " Кыргызский государственный юридический университет (КГЮА) является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования"
  }
]

export const News = () => {
  const [selected, setSelected] = useState(undefined)

  const handleClick = (index) => {
    if (selected === index) {
      setSelected(undefined)
    }
    else {
      setSelected(index)
    }
  }
  return (
    <div className="news">
      <h2>
        <span>Новости</span>
      </h2>
      <div className="wrapper">
        {news.map((item, index) => (
          <div

            className={classnames(
              "newsItem",
              selected === index && "newsOpenItem"
            )} key={index}>
            <img className="newsBackgroundImg" src={item.img} />
            <p className="newsDate">{item.date}</p>
            <p className="newsTitle">
              {item.title}
            </p>
            <img
              onClick={() => handleClick(index)}
              className="newsButton"
              src={selected === index ? '/images/close-news-icon.svg' : "/images/more-icon.svg"} />
            { selected === index &&
              <p className="newsContent">Кыргызский государственный юридический университет (КГЮА)
              является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования</p>
            }
          </div>
        ))}
      </div>
    </div>
  )
}