import { useState } from 'react'
import Link from 'next/link'
import { BurgerMenu } from '@Components'
import { useRouter } from 'next/router'
import classnames from 'classnames'

const links = [
  {
    title: 'О КГЮА',
    routes: [
      {
        title: 'Информация о КГЮА',
        route: '/about',
      },
      {
        title: 'Структура университета',
        route: '/about/structure',
      },
      // {
      //   title: 'Персонал',
      //   route: ''
      // },
      // {
      //   title: 'Электронные ресурсы',
      //   route: ''
      // },
      {
        title: 'Ассоциация выпускников',
        route: '/alumni-association',
      },
      // {
      //   title: 'Жизнь КГЮА',
      //   route: ''
      // },
      // {
      //   title: 'Информация о КГЮА ',
      //   route: ''
      // },
      // {
      //   title: 'Виртуальная экскурсия по КГЮА',
      //   route: ''
      // },
      {
        title: 'Контакты',
        route: '/contacts',
      },
    ],
  },
  {
    title: 'Учебные подразделения',
    routes: [
      {
        title: 'Структура университета',
        route: '/structure',
      },
    ],
  },
  // {
  //   title: 'Наука',
  //   routes: [

  //   ]
  // },
  // {
  //   title: 'Международные сотрудничества',
  //   routes: [

  //   ]
  // },
  {
    title: 'Поступающим',
    routes: [
      {
        title: 'Поступающим',
        route: '/incoming',
      },
    ],
  },
  // {
  //   title: 'Сотрудникам',
  //   routes: [

  //   ]
  // },
  {
    title: 'Студентам',
    routes: [
      {
        title: 'Студентам',
        route: '/students',
      },
    ],
  },
]
const LANG = [
  {
    title: 'EN',
    locale: 'en',
  },
  {
    title: 'Рус',
    locale: 'ru',
  },
  {
    title: 'Кыр',
    locale: 'kg',
  },
]
export const Header = () => {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const path = useRouter().pathname

  const [selectedItem, setSelectedItem] = useState(undefined)
  const onListItemClick = (index) => {
    if (selectedItem === index) {
      setSelectedItem(undefined)
    } else {
      setSelectedItem(index)
    }
  }

  return (
    <div className="header">
      <div className="wrapper">
        <img
          src="/images/text-logo.png"
          alt="logo"
          className="header__logo"
          onClick={() => router.push('/')}
        />
        <ul>
          {links?.map((item, index) => (
            <li
              key={index}
              className={classnames(
                'header__list-item',
                selectedItem === index && 'header__selected'
              )}
              onClick={() => onListItemClick(index)}
            >
              {item.title}
              {selectedItem === index && item.routes.length > 0 && (
                <div className="header__links">
                  {item?.routes.map((route, index) => (
                    <Link key={index} href={route.route}>
                      {route.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="header__lang">
          <button className="header__list-item" onClick={() => setOpen(!open)}>
            {LANG.filter((item) => item.locale === router.locale)[0].title}
            <img src="/images/arrow-down.svg" alt="" />
          </button>
          {open && (
            <div>
              {LANG.map((item, index) => (
                <Link key={index} href={path} locale={item.locale}>
                  <a>{item.title}</a>
                </Link>
              ))}
            </div>
          )}
        </div>
        <BurgerMenu links={links} />
      </div>
    </div>
  )
}
