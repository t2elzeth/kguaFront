import { useState } from 'react'
import classnames from 'classnames'

const links = [
  {
    title: 'О КГЮА',
    routes: [
      {
        title: 'Информация о КГЮА ',
        route: ''
      },
      {
        title: 'Информация о КГЮА ',
        route: ''
      },
      {
        title: 'Информация о КГЮА ',
        route: ''
      },
      {
        title: 'Информация о КГЮА ',
        route: ''
      },
      {
        title: 'Информация о КГЮА ',
        route: ''
      },
      {
        title: 'Информация о КГЮА ',
        route: ''
      },
      {
        title: 'Информация о КГЮА ',
        route: ''
      },
      {
        title: 'Информация о КГЮА ',
        route: ''
      }
    ]
  },
  {
    title: 'Учебные подразделения',
    routes: [

    ]
  },
  {
    title: 'Наука',
    routes: [

    ]
  },
  {
    title: 'Международные сотрудничества',
    routes: [

    ]
  },
  {
    title: 'Поступающим',
    routes: [

    ]
  },
  {
    title: 'Сотрудникам',
    routes: [

    ]
  },
  {
    title: 'Студентам',
    routes: [

    ]
  },

]

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState(undefined)

  const onListItemClick = (index) => {
    setSelectedItem(index)
  }

  return (
    <div className="header">
      <ul>
        <img src='/images/text-logo.png' alt="logo" className="header__logo" />
        {links?.map((item, index) => (

          <li key={index}
            className={classnames(
              'header__list-item',
              selectedItem === index && 'header__selected')}
            onClick={() => onListItemClick(index)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}