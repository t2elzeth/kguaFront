import { Fragment, useState } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'



export const Sidebar = ({ links }) => {
  const location = useRouter().pathname
  const [selected, setSelected] = useState(0)

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
            {item.route ?
              <Link href={item.route}>
                {item.title}
              </Link>
              :
              item.title
            }
          </p>
          {selected === index && (
            <ul>
              {item?.routes?.map((route, index) => (
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
      {/* <img src="/images/sidebar.png" />
      <p className="sidebar__virtual">Виртуальный тур по КГЮА</p> */}
    </div>
  )
}