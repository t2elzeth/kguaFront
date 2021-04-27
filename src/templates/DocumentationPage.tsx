import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  StickySidebar,
  DocumentationHeader,
  BurgerMenu,
  SlideMenu,
  SupportFooter,
} from '../components'

const routes = [
  {
    navTitle: 'Главная',
    active: false,
    route: '/documentation',
  },
  {
    navTitle: 'Коды ошибок',
    active: false,
    route: '/documentation/error-codes',
  },
  {
    navTitle: 'Регистрация платежей',
    active: false,
    route: '/documentation/payment-register',
  },
  {
    navTitle: 'Изменения суммы платежа',
    active: false,
    route: '/documentation/payment-change',
  },
  {
    navTitle: 'Списание платежа',
    active: false,
    route: '/documentation/debit-payment',
  },
  {
    navTitle: 'Отмена платежа',
    active: false,
    route: '/documentation/cancel-payment',
  },
  {
    navTitle: 'Возврат платежа',
    active: false,
    route: '/documentation/refund-payment',
  },
  {
    navTitle: 'Подтверждение платежа по сохраненной карте',
    active: false,
    route: '/documentation/confirm-payment',
  },
  {
    navTitle: 'Статус платежа',
    active: false,
    route: '/documentation/payment-status',
  },
  {
    navTitle: 'Callback-уведомления',
    active: false,
    route: '/documentation/callback-push',
  },
  {
    navTitle: 'Сохранение карты без оплаты',
    active: false,
    route: '/documentation/save-card-without-payment',
  },
  {
    navTitle: 'Сохранение карт в системе',
    active: false,
    route: '/documentation/save-cards',
  },
  {
    navTitle: 'Получение сохраненных карт',
    active: false,
    route: '/documentation/get-saved-cards',
  },
  {
    navTitle: 'Добавление виджета',
    active: false,
    route: '/documentation/add-widget',
  },
  {
    navTitle: 'Чек-лист для интеграции',
    active: false,
    route: '/documentation/checklist-integration',
  },
  {
    navTitle: 'Готовые решения',
    active: false,
    route: '/documentation/quick-start',
  },
]

export type DocumentationPageProps = {
  pageName: string
  pageTitle?: string
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({ pageName, children, pageTitle }) => {
  const router = useRouter().pathname

  const docsRoutes = routes.map((item) => {
    if (router === item.route) {
      item.active = true
    }

    return { ...item }
  })

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="documentation-page">
        <StickySidebar sidebarItems={docsRoutes} />
        <BurgerMenu type="tablet" />
        <div className="main">
          <DocumentationHeader />
          <div className="body">
            <SlideMenu sidebarItems={docsRoutes} activeRoute={pageName} />
            {children}
          </div>
          <div className="footer-link">
            <SupportFooter />
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentationPage
