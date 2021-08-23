import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useCallback, useState } from 'react'

export const Sidebar = ({ links }) => {
  const router = useRouter()

  const [state, setState] = useState(router.pathname)

  const handleItemClick = useCallback(
    (link, index) => () => {
      if (link.subLinks?.length) {
        if (state !== index) {
          setState(index)
        }
      } else {
        router.push(link.route)
      }
    },
    [state, router]
  )

  return (
    <div className="sidebar">
      <ul>
        {links.map((route, index) => (
          <li
            key={index}
            onClick={handleItemClick(route, index)}
            className={classnames(
              'sidebar__item',
              (state === index || route.route === router.pathname) && 'sidebar__link'
            )}
          >
            {route.name}
            {(state === index || route.route === router.pathname) && route.subLinks?.length && (
              <ul style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                {route.subLinks?.map((item) => (
                  <Link key={item.route} href={item.route}>
                    <li
                      className={classnames(
                        'sidebar__subItem',
                        item.route === router.pathname && 'sidebar__subLink'
                      )}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <img src="/images/sidebar.png" />
      <p className="sidebar__virtual">Виртуальный тур по КГЮА</p>
    </div>
  )
}
