import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export const Sidebar = ({ links }) => {
  const location = useRouter().pathname
  const { t } = useTranslation()
  return (
    <div className="sidebar">
      <p className="sidebar__item">{links.title}</p>
      <ul>
        {links?.routes?.map((route, index) => (
          <Link key={index} href={route.route}>
            <li
              className={classnames(
                'sidebar__link',
                route.route == location && 'sidebar__active-link'
              )}
            >
              {t(route.title)}
            </li>
          </Link>
        ))}
      </ul>
      {/* <img src="/images/sidebar.png" />
      <p className="sidebar__virtual">Виртуальный тур по КГЮА</p> */}
    </div>
  )
}
