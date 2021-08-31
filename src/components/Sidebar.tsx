import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { useMemo } from 'react'

// import default minimal styling or your own styling
// import 'node_modules/react-simple-tree-menu/dist/main.css'

export const Sidebar = ({ links }) => {
  const router = useRouter()

  const routeName = useMemo(() => {
    if (router.pathname.includes('/about/')) return 'about'
    else if (router.pathname.includes('/training-units/')) return 'training-units'
    else if (router.pathname.includes('/science/')) return 'science'
    else if (router.pathname.includes('/international-cooperation/'))
      return 'international-cooperation'
    else if (router.pathname.includes('/incoming/')) return 'incoming'
    else if (router.pathname.includes('/employees/')) return 'employees'
    else if (router.pathname.includes('/students/')) return 'students'
  }, [router])

  const initIndex =
    typeof window !== 'undefined' && localStorage.getItem(`__ksla:sidebar_${routeName}`)

  const [state, setState] = useState(Number(initIndex) || null)

  const handleItemClick = useCallback(
    (link, index) => () => {
      if (link.subLinks?.length) {
        if (state !== index) {
          setState(index)
          localStorage.setItem(`__ksla:sidebar_${routeName}`, index)
        }
      } else {
        router.push(link.route)
      }
    },
    [state, router, routeName]
  )

  return (
    <div className="sidebar">
      {/* <TreeViewMenu
        data={links}
        onClickItem={({ key, label, ...props }) => {
          setState(props)
          router.replace({ pathname: props.route }) // user defined prop
        }}
        debounceTime={125}
        initialActiveKey={router.pathname}
        activeKey={router.pathname}
        // focusKey={router.pathname}
        // initialFocusKey={router.pathname}
      /> */}

      <ul>
        {links.map((route, index) => {
          return (
            <li
              key={index}
              onClick={handleItemClick(route, index)}
              className={classnames(
                'sidebar__item',
                (state === index || route.route === router.pathname) && 'sidebar__link'
              )}
            >
              {route.name}
              {state === index && route.subLinks?.length && (
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
