import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

export const BurgerMenu: React.FC<any> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const closeNav = () => {
    setIsOpen(false)
  }

  const openNav = () => {
    setIsOpen(true)
  }

  const [selectedItem, setSelectedItem] = useState(null)

  const onListItemClick = (index) => () => {
    if (selectedItem === index) {
      setSelectedItem(null)
    } else {
      setSelectedItem(index)
    }
  }

  const onItemClick = (item, index) => () => {
    if (selectedItem !== index) {
      setSelectedItem(index)
    }
    router.push(item.route)
    closeNav()
  }

  return (
    <>
      <div className={classnames('burger-menu', isOpen ? 'open' : 'close')}>
        <div className="wrapper">
          <div className="burger-menu__header">
            <img
              alt=""
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
                  onClick={item.routes?.length ? onListItemClick(index) : onItemClick(item, index)}
                >
                  {t(`header.${item.title}`)}
                  {item.routes?.length > 0 && <img src="/images/arrow-down.svg" />}
                </li>
                <>
                  {selectedItem === index && item?.routes?.length > 0 && (
                    <div className="burger-menu__links">
                      {item?.routes.map((route) => (
                        <Link key={route.rote} href={route.route}>
                          {route.title}
                        </Link>
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
