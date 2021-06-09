import { Fragment, useState } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'


const links = [
  {
    title: 'Информация о КГЮА',
    active: false,
    routes: [
      {
        title: 'Основные сведения',
        route: '/about'
      },
      {
        title: 'История образования и развития КГЮА',
        route: ''
      },
      {
        title: 'Миссия и стратегия',
        route: '/about/mission'
      },
      {
        title: 'Символика',
        route: '/about/symbolism'
      },
      {
        title: 'Награды и звания',
        route: '/about/awards'
      },
      {
        title: 'Документы',
        route: ''
      },
      {
        title: 'Локальные-нормативные акты',
        route: ''
      },
      {
        title: 'Материально-техническая база университета',
        route: ''
      },
    ]
  },
  {
    title: 'Структура университета',
    active: true,
    routes: [
      {
        title: 'Ректорат',
        route: ''
      },
      {
        title: 'Кафедры',
        route: ''
      },
      {
        title: 'Структурные подразделения',
        route: ''
      },
      {
        title: 'Учебные подразделения',
        route: ''
      },
    ]
  },
  {
    title: 'Персонал',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Электронные ресурсы ',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Ассоциация выпускников ',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Жизнь КГЮА',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Виртуальный тур',
    active: false,
    routes: [

    ]
  },
  {
    title: 'Контакты',
    active: false,
    routes: [

    ]
  },
]

export const Sidebar = () => {
  const location = useRouter().pathname
  const [selected, setSelected] = useState(undefined)

  const onItemClick = (index) => {
    setSelected(index)
  }
  return (
    <div className="sidebar">
      {links.map((item, index) => (
        <Fragment key={index}>
          <p
            onClick={() => onItemClick(index)}
            className={classnames(
              selected === index && 'sidebar__active-item',
              'sidebar__item'
            )}>
            {item.title}
          </p>
          {selected === index && (
            <ul>
              {item.routes.map((route, index) => (
                <Link href={route.route}>
                  <li
                    key={index}
                    className={classnames(
                      'sidebar__link',
                      route.route == location && 'sidebar__active-link'
                    )}
                  >{route.title}</li>
                </Link>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
    </div>
  )
}