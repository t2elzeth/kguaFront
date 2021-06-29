
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


export const MobileMenu = ({ links }) => {

  const [selected, setSelected] = useState(undefined)
  const [isOpen, setIsOpen] = useState(false)

  const onListItemClick = (index) => {
    if (selected === index) {
      setSelected(undefined)
    }
    else {
      setSelected(index)
    }
  }

  const path = useRouter().pathname

  const currentLink = links.find((link) => (
    link?.routes ?
      link.routes?.map((item) => item.route === path)
      : link.route === path
  ))

  console.log(links.map((item) => item?.routes?.map((route) => (
    route.route !== path
  ))))

  const unActiveRoutes = links.filter((link) => (
    link.routes?.map((item) => item.route !== path)
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
                    className="text-small">
                    {item.title}
                  </a>
                </Link>
              )
            }
          </ul>
          {unActiveRoutes.map((route, index) => (
            <Fragment key={index}>
              <a className="text-small-medium"
                onClick={() => onListItemClick(index)}>
                {route.title}
                {route.routes && <img src='/images/dark-arrow-down.svg' />}
              </a>
              {selected === index &&
                <ul >
                  {route.routes?.map((route) => (
                    <Link href={route.route}>
                      <a
                        className="text-small"
                        onClick={() => setIsOpen(false)}>
                        {route.title}

                      </a>
                    </Link>
                  ))}
                </ul>
              }
            </Fragment>
          ))}
        </div>
      }
    </div >
  )
}