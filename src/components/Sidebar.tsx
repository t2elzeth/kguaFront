import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useCallback, useState } from 'react'

// import default minimal styling or your own styling
// import 'node_modules/react-simple-tree-menu/dist/main.css'

export const Sidebar = ({ links }) => {
  const router = useRouter()

  const draft: any = Array.from(links).find((item: any) => {
    if (item.subLinks) {
      return item.subLinks.find((subItem: any) =>
        subItem.route === router.pathname ? true : false
      )
    }
    if (item.route === router.pathname) return true
  })

  const [state, setState] = useState(draft?.route)

  const handleItemClick = useCallback(
    (link) => () => {
      if (link.subLinks?.length) {
        if (state !== link.route) {
          setState(link.route)
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
        {links.map((route, idx) => {
          return (
            <li
              key={idx}
              onClick={handleItemClick(route)}
              className={classnames('sidebar__item', state === route.route && 'sidebar__link')}
            >
              {route.name}
              {state === route.route && route.subLinks?.length && (
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
          )
        })}
      </ul>
      <img alt="sidebar" src="/images/sidebar.png" />
      <p className="sidebar__virtual">Виртуальный тур по КГЮА</p>
    </div>
  )
}
