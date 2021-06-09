import { useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'

const links = [
  {
    title: 'О КГЮА',
    routes: [
      {
        title: 'Информация о КГЮА',
        route: '/about'
      },
      {
        title: 'Структура университета',
        route: ''
      },
      {
        title: 'Персонал',
        route: ''
      },
      {
        title: 'Электронные ресурсы',
        route: ''
      },
      {
        title: 'Ассоциация выпускников',
        route: ''
      },
      {
        title: 'Жизнь КГЮА',
        route: ''
      },
      {
        title: 'Информация о КГЮА ',
        route: ''
      },
      {
        title: 'Виртуальная экскурсия по КГЮА',
        route: ''
      },
      {
        title: 'Контакты',
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
            {selectedItem === index && item.routes.length > 0 &&
              <div className="header__links">
                {item?.routes.map((route) => (
                  <Link href={route.route}>{route.title}</Link>
                ))}
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}