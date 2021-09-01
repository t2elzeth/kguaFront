import { useState } from 'react'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

// const news = [
//   {
//     img: '/images/news-section-1.png',
//     date: '21 марта 20 21',
//     title:
//       'КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования',
//     article:
//       ' Кыргызский государственный юридический университет (КГЮА) является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования',
//   },
//   {
//     img: '/images/news-section-1.png',
//     date: '21 марта 20 21',
//     title:
//       'КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования',
//     article:
//       ' Кыргызский государственный юридический университет (КГЮА) является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования',
//   },
//   {
//     img: '/images/news-section-3.png',
//     date: '21 марта 20 21',
//     title:
//       'КГЮА образован в целях совершенствования системы подготовки юридических кадров и повышения качества юридического образования',
//     article:
//       ' Кыргызский государственный юридический университет (КГЮА) является государственным высшим профессиональным учебным заведением, выполняющим общегосударственные задачи, центром подготовки кадров в системе высшего образования',
//   },
// ]

export const News = ({ news }) => {
  const { t } = useTranslation('common')

  const [selected, setSelected] = useState(undefined)

  const handleClick = (index) => {
    if (selected === index) {
      setSelected(undefined)
    } else {
      setSelected(index)
    }
  }
  return (
    <div className="news">
      <h2>
        <span>{t('news')}</span>
      </h2>
      <div className="wrapper">
        {news?.slice(0, 3).map((item, index) => (
          <div className={classnames('newsItem', selected === index && 'newsOpenItem')} key={index}>
            <img alt="" className="newsBackgroundImg" src={item.image} />
            <p className="newsDate">{item.date}</p>
            <p className="newsTitle">{item.title}</p>
            <img
              alt=""
              onClick={() => handleClick(index)}
              className="newsButton"
              src={selected === index ? '/images/close-news-icon.svg' : '/images/more-icon.svg'}
            />
            {selected === index && <p className="newsContent">{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
