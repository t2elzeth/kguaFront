
import { useState } from 'react'
import Link from 'next/link'

export const MobileMenu = ({ links }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__header"
        onClick={() => setIsOpen(!isOpen)}>
        <a className="text-small-medium">
          {links.title}
        </a>
        <img src='/images/dark-arrow-down.svg' />
      </div>
      {isOpen &&
        <div className="mobile-menu__body">
          <ul>
            {
              links?.routes?.map((item) =>
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
        </div>
      }
    </div >
  )
}