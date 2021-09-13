import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  List,
  AppBar,
  Toolbar,
  ListItem,
  Menu,
  ListItemText,
  MenuItem,
  useMediaQuery,
} from '@material-ui/core'
import { HEADER_LINKS, LANG } from '@src/common/constants'
import { useTranslation } from 'react-i18next'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { BurgerMenu } from '.'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      background: '#ED1A3B',
      [theme.breakpoints.down('lg')]: {
        marginLeft: 'auto',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      display: 'flex',
      width: '100%',
    },
    toolBar: {
      margin: '0 auto',
      [theme.breakpoints.down('lg')]: {
        margin: 0,
        justifyContent: 'space-between',
      },
    },
    menu: {
      marginTop: theme.spacing(6),
    },
    menuPaper: {
      background: '#ED1A3B',
      color: 'white',
    },
    text: {
      fontSize: '14px',
      whiteSpace: 'nowrap',
      width: '100%',
    },
    langText: {
      textTransform: 'uppercase',
      width: 'auto',
    },
  })
)

export function HeaderTwo() {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:1280px)')

  const [anchorElMenu, setAnchorElMenu] = useState({})
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null)
  const openLang = Boolean(anchorElLang)

  const handleClick = (index) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu({ [index]: event.currentTarget })
  }

  const handleClose = (index) => () => {
    setAnchorElMenu({ [index]: null })
  }

  const handleCloseLang = () => {
    setAnchorElLang(null)
  }

  const handleItemClick = (link) => () => {
    router.push(link.route)
  }

  const handleClickLang = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <img
            src="/images/text-logo.png"
            alt="logo"
            className="header__logo"
            onClick={() => router.push('/')}
          />
          {isMobile ? (
            <>
              <div style={{ flexGrow: 1 }} />
              <ListItem className={classes.langText} button onClick={handleClickLang}>
                <ListItemText primary={router.locale} />
                {openLang ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Menu
                id="lang-menu"
                anchorEl={anchorElLang}
                keepMounted
                open={openLang}
                onClose={handleCloseLang}
                className={classes.menu}
                classes={{ paper: classes.menuPaper }}
              >
                {LANG.map((item: any, index: number) => (
                  <Link key={index} href={router.pathname} locale={item.locale}>
                    <MenuItem>{item.title}</MenuItem>
                  </Link>
                ))}
              </Menu>
              <BurgerMenu links={HEADER_LINKS} />
            </>
          ) : (
            <List className={classes.list}>
              {HEADER_LINKS.map((link: any, index: number) => (
                <>
                  {link?.routes?.length ? (
                    <>
                      <ListItem
                        onMouseOver={handleClick(index)}
                        style={{ display: 'flex', width: 'auto' }}
                        key={index}
                        button
                        onClick={handleClick}
                      >
                        <ListItemText
                          inset
                          primaryTypographyProps={{ className: classes.text }}
                          primary={t(`header.${link.title}`)}
                        />
                        {anchorElMenu[index] ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Menu
                        id="fade-menu"
                        anchorEl={anchorElMenu[index]}
                        keepMounted
                        open={!!anchorElMenu[index]}
                        onClose={handleClose(index)}
                        className={classes.menu}
                        MenuListProps={{ onMouseLeave: handleClose(index) }}
                        classes={{ paper: classes.menuPaper }}
                      >
                        {link.routes.map((item: any, index: number) => (
                          <MenuItem
                            selected={item.route === router.pathname}
                            key={index}
                            onClick={handleItemClick(item)}
                          >
                            {t(`header.${item.title}`)}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <ListItem
                      button
                      onClick={handleItemClick(link)}
                      selected={link.route === router.pathname}
                      style={{ width: 'auto' }}
                    >
                      <ListItemText
                        primaryTypographyProps={{ className: classes.text }}
                        primary={t(`header.${link.title}`)}
                      />
                    </ListItem>
                  )}
                </>
              ))}
              <ListItem className={classes.langText} button onClick={handleClickLang}>
                <ListItemText primary={router.locale} />
                {openLang ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Menu
                id="lang-menu"
                anchorEl={anchorElLang}
                keepMounted
                open={openLang}
                onClose={handleCloseLang}
                className={classes.menu}
                classes={{ paper: classes.menuPaper }}
              >
                {LANG.map((item: any, index: number) => (
                  <Link key={index} href={router.pathname} locale={item.locale}>
                    <MenuItem>{item.title}</MenuItem>
                  </Link>
                ))}
              </Menu>
            </List>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
