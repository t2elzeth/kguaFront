import React, { useState } from 'react'
import classnames from 'classnames'

export type SlideMenuProps = {
  sidebarItems: any[]
  activeRoute?: string
}

const SlideMenu: React.FC<SlideMenuProps> = ({ sidebarItems, activeRoute }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeNav = () => {
    setIsOpen(false)
  }

  const openNav = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className={classnames('slide-menu', isOpen ? 'open' : 'close')}>
        <div role="presentation" className="top-divider" onClick={closeNav} />
        <div className="content">
          {sidebarItems.map(({ navTitle, route }) => (
            <a href={route} key={navTitle}>
              {navTitle}
            </a>
          ))}
        </div>
      </div>
      <div role="presentation" className="slidebar-link" onClick={openNav}>
        <div>{activeRoute}</div>
        <img src="/images/ArrowRight.svg" alt="arrow-right-icon" />
      </div>
      <div
        role="presentation"
        className={classnames('background-overlay', isOpen ? 'open' : 'close')}
        onClick={closeNav}
      />
    </>
  )
}

export default SlideMenu
