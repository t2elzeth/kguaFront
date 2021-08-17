import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useCallback, useState } from 'react'

export const Sidebar = ({ links }) => {
  const router = useRouter()

  const [state, setState] = useState(null)

  const handleItemClick = useCallback(
    (link, index) => () => {
      if (link.subLinks.length) {
        if (state !== index) {
          setState(index)
        } else {
          setState(null)
        }
      } else {
        router.push(link.route)
      }
    },
    [state, router]
  )

  return (
    <div className="sidebar">
      {/* <p className="sidebar__item">{links.title}</p> */}
      <ul>
        {links.map((route, index) => (
          <li
            key={index}
            onClick={handleItemClick(route, index)}
            className={classnames(
              'sidebar__link',
              route.route === router.pathname && 'sidebar__item'
            )}
          >
            {route.name}
            {state === index && route.subLinks.length && (
              <ul>
                {route.subLinks.map((item) => (
                  <Link key={item.route} href={item.route}>
                    <li>{item.name}</li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* <img src="/images/sidebar.png" />
      <p className="sidebar__virtual">Виртуальный тур по КГЮА</p> */}
    </div>
  )
}
