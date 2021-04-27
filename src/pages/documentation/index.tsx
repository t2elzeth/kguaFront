import React from 'react'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

export type DocumentationProps = { any }

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <DocumentationPage pageName="Главная" pageTitle="Принимайте платежи">
      <div className="section-1">
        <h1>Принимайте платежи</h1>
        <p>
          Это инструмент для интеграции с ioka — для разработчиков. Позволяет принимать платежи,
          делать возвраты, узнавать о статусе операций и многое другое.
          <br />
          <br />В этом документе собраны описания основных сценариев с примерами кода. Вся
          информация о структуре запросов, объектах и переменных есть в справочнике API . Чтобы
          принять платеж, нужно всего несколько строчек кода. Поехали 🚀
        </p>
      </div>
      <br />
      <br />
      <div className="interface-rest">
        <h1>Интерфейс REST</h1>
        <p>
          Каждый запрос представляет собой HTTP-обращения на определённые URL-адреса (см. Координаты
          подключения ). Обращения могут быть реализованы методами GET и POST, при этом значения
          должны быть совместимы с URL (т.е. URL encoded). Результат обработки запроса возвращается
          в виде JSON объекта. Например:
        </p>
        <CodeBox>'error_code':'100', 'error_message':'Empty amount'</CodeBox>
        <p>
          Для авторизации обращения магазина к системе платежного используется токен из личного
          кабинета. Все запросы должны имеет обязательные заголовки:
        </p>
        <CodeBox>
          <b>Content-type:</b>
          application/json
          <br />
          <b>Accept-Language:</b>
          ru (в зависимости от выбора языка интерфейса)
          <br />
          <b>Authorization:</b>
          Bearer {'<SECRET_KEY из личного кабинета>'}
        </CodeBox>
        <p>
          В зависимости от выбранной схемы оплаты (одностадийная или двухстадийная) используется
          различный набор запросов. Ниже описаны запросы для каждой из схем.
        </p>
      </div>
    </DocumentationPage>
  )
}

export default Documentation
