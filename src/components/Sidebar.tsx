import { Fragment } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'

export const Sidebar = ({ links }) => {
  const location = useRouter().pathname

  return (
    <div className="sidebar">
      {links.map((item, index) => (
        <Fragment key={index}>
          <p className={classnames(
            item.active && 'sidebar__active-item',
            'sidebar__item'
          )}>
            {item.title}
          </p>
          {item.active && (
            <ul>
              {item.routes.map((route, index) => (
                <li
                  key={index}
                  className={classnames(
                    'sidebar__link',
                    route.route == location && 'sidebar__active-link'
                  )}
                >{route.title}</li>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
    </div>
  )
}