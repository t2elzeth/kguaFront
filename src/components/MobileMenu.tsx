
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
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
    route: '/staff',
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
    route: '/alumni-association',
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
    route: '/contacts'
  },
]

export const MobileMenu = ({ }) => {

  const [selected, setSelected] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const onNavClick = (index) => {
    setSelected(index)
  }

  const path = useRouter().pathname
  const currentLink = links.find((link) => (
    link?.routes ?
      link.routes?.map((item) => item.route === path)
      : link.route === path
  ))

  const unActiveRoutes = links.filter((link) => (
    link?.routes ?
      link.routes?.map((item) => item.route !== path)
      : link.route !== path
  ))

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__header" onClick={() => setIsOpen(!isOpen)}>
        <a className="text-small-medium">
          {currentLink?.title}
        </a>
        <img src='/images/dark-arrow-down.svg' />
      </div>
      {isOpen &&
        <div className="mobile-menu__body">
          <ul>
            {
              currentLink?.routes?.map((item) =>
                <Link
                  key={item.route}
                  href={item.route}
                >
                  <a
                    className={classnames(
                      "text-small")}>
                    {item.title}
                  </a>
                </Link>
              )
            }
          </ul>
          {unActiveRoutes.map((route, index) => (
            <Fragment key={index}>
              <a className="text-small-medium"
                onClick={() => onNavClick(index)}>
                {route.title}
                {route.routes && <img src='/images/dark-arrow-down.svg' />}
              </a>
            </Fragment>
          ))}
        </div>
      }
    </div >
  )
}