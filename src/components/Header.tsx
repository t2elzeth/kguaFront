import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import { HEADER_LINKS, LANG } from '@src/common/constants'
import { BurgerMenu } from '@Components'

export const Header = () => {
  const { t } = useTranslation('common')

  const router = useRouter()
  const path = useRouter().pathname

  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  console.log('selectedItem: ', selectedItem)

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
  }

  return (
    <div className="header">
      <div className="wrapper">
        <img
          src="/images/text-logo.png"
          alt="logo"
          className="header__logo"
          onClick={() => router.push('/')}
        />
        <ul>
          {HEADER_LINKS?.map((item, index) => (
            <li
              key={index}
              className={classnames(
                'header__list-item',
                selectedItem === index && 'header__selected'
              )}
              onClick={item.routes?.length ? onListItemClick(index) : onItemClick(item, index)}
            >
              {t(`header.${item.title}`)}
              {selectedItem === index && item.routes?.length > 0 && (
                <div className="header__links">
                  {item?.routes.map((route, index) => (
                    <Link key={index} href={route.route}>
                      {route.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="header__lang">
          <button className="header__list-item" onClick={() => setOpen(!open)}>
            {LANG.filter((item) => item.locale === router.locale)[0].title}
            <img src="/images/arrow-down.svg" alt="" />
          </button>
          {open && (
            <div>
              {LANG.map((item, index) => (
                <Link key={index} href={path} locale={item.locale}>
                  <a>{item.title}</a>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* <BurgerMenu links={HEADER_LINKS} /> */}
      </div>
    </div>
  )
}
