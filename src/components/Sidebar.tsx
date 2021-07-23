import classnames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'



export const Sidebar = ({ links }) => {
  const location = useRouter().pathname
  return (
    <div className="sidebar">
      <p
        className='sidebar__item'>
        {links.title}
      </p>
      <ul>
        {links?.routes?.map((route, index) => (
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
      {/* <img src="/images/sidebar.png" />
      <p className="sidebar__virtual">Виртуальный тур по КГЮА</p> */}
    </div >
  )
}