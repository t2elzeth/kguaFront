import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

export const BurgerMenu: React.FC<any> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const closeNav = () => {
    setIsOpen(false)
  }

  const openNav = () => {
    setIsOpen(true)
  }

  const [selectedItem, setSelectedItem] = useState(undefined)
  const onListItemClick = (index) => {
    if (selectedItem === index) {
      setSelectedItem(undefined)
    } else {
      setSelectedItem(index)
    }
  }

  return (
    <>
      <div className={classnames('burger-menu', isOpen ? 'open' : 'close')}>
        <div className="wrapper">
          <div className="burger-menu__header">
            <img
              src="/images/text-logo.png"
              className="burger-menu__logo"
              onClick={() => router.push('/')}
            />
            <div className="burger-menu__icon">
              <img src="/images/close-burger-icon.svg" alt="burger-menu-icon" onClick={closeNav} />
            </div>
          </div>
          <div className="burger-menu__content">
            {links?.map((item, index) => (
              <>
                <li
                  key={index}
                  className={classnames('burger__list-item')}
                  onClick={() => onListItemClick(index)}
                >
                  {item.title}
                  {item.routes.length > 0 && <img src="/images/arrow-down.svg" />}
                </li>
                <>
                  {selectedItem === index && item.routes.length > 0 && (
                    <div className="burger-menu__links">
                      {item?.routes.map((route) => (
                        <Link href={route.route}>{route.title}</Link>
                      ))}
                    </div>
                  )}
                </>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="burger-menu__icon">
        <img src="/images/burger-menu-icon.svg" alt="burger-menu-icon" onClick={openNav} />
      </div>
    </>
  )
}
