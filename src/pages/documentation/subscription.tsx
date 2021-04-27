import { Table } from '@Components'
import React from 'react'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

export type SubscriptionProps = { any }

const registerSubscriptionRows = [
  ['amount', 'integer', 'да', 'Сумма платежа'],
  [
    'currency',
    'integer',
    'нет',
    'Код валюты в стандарте ISO 4217. Если не указан, то используется значение по умолчанию (398 - KZT)',
  ],
  ['description', 'string', 'нет', 'Назначение платежа в свободной форме'],
  [
    'tr_type',
    'integer',
    'нет',
    'Тип транзакции (0 или 1). При tr_type = 1 блокировка суммы, после успешной авторизации необходимо вызвать списание платежа. При tr_type = 0 после успешной авторизации, платеж автоматически будет списан со счета клиента. По умолчанию выставлен tr_type = 0',
  ],
  ['email', 'string', 'да', 'Почтовый адрес (куда будет выслан электронный счет оплаты)'],
  [
    'token',
    'string',
    'да',
    'Идентификатор связки (токен платежной карты), созданной ранее. Если этот параметр передаётся в данном запросе, то это означает что: 1) Данный заказ может быть оплачен только с помощью связки; 2) Плательщик будет перенаправлен на платежную страницу, где требуется только ввод CVV',
  ],
  [
    'client_id',
    'integer',
    'да',
    'Номер (идентификатор) клиента в системе магазина. Используется для реализации функциональности связок. Указание этого параметра при платежах по связке необходимо - в противном случае платёж будет не успешен',
  ],
  ['start_date', 'datetime', 'да', 'Дата и время первого платежа по плану во временной зоне UTC'],
  ['interval', 'string', 'да', 'Возможные значения: 1) DAY; 2) WEEK; 3) MONTH'],
  [
    'period',
    'integer',
    'да',
    'Период. В комбинации с интервалом, 1 DAY значит раз в день, а 3 MONTH — раз в три месяца. Должен быть больше 0',
  ],
  [
    'max_period',
    'integer',
    'нет',
    'Максимальное количество платежей в подписке. Если указан, должен быть больше 0',
  ],
  [
    'callback_url',
    'string',
    'нет',
    'Ссылка, служащая для приема статуса платежа после оплаты. После того, как ваш клиент завершит платеж, на указанный URL отправляется POST запрос со статусом платежа',
  ],
]

const registerSubscriptionResRows = [
  ['id', 'integer', 'да', 'Идентификатор рекуррентного платежа'],
  ['status', 'string', 'да', 'Возможные значения: 1) ACTIVE; 2) STOP'],
  ['amount', 'integer', 'да', 'Сумма платежа'],
  [
    'currency',
    'integer',
    'да',
    'Код валюты в стандарте ISO 4217. Если не указан, то используется значение по умолчанию (398 - KZT)',
  ],
  ['description', 'string', 'да', 'Назначение платежа в свободной форме'],
  [
    'tr_type',
    'integer',
    'да',
    'Тип транзакции (0 или 1). При tr_type = 1 блокировка суммы, после успешной авторизации необходимо вызвать списание платежа. При tr_type = 0 после успешной авторизации, платеж автоматически будет списан со счета клиента. По умолчанию выставлен tr_type = 0',
  ],
  ['email', 'string', 'да', 'Почтовый адрес (куда будет выслан электронный счет оплаты)'],
  ['token', 'string', 'да', 'Идентификатор связки (токен платежной карты), созданной ранее'],
  [
    'client_id',
    'integer',
    'да',
    'Номер (идентификатор) клиента в системе магазина. Используется для реализации функциональности связок. Указание этого параметра при платежах по связке необходимо - в противном случае платеж будет не успешен',
  ],
  ['start_date', 'datetime', 'да', 'Дата и время первого платежа по плану во временной зоне UTC'],
  ['interval', 'string', 'да', 'Возможные значения: 1) DAY; 2) WEEK; 3) MONTH'],
  [
    'period',
    'integer',
    'да',
    'Период. В комбинации с интервалом, 1 DAY значит раз в день, а 3 MONTH — раз в три месяца. Должен быть больше 0',
  ],
  [
    'max_period',
    'integer',
    'нет',
    'Максимальное количество платежей в подписке. Если указан, должен быть больше 0',
  ],
  ['callback_url', 'string', 'нет', 'Ссылка, служащая для приема статуса платежа после оплаты'],
]

const headRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const Subscription: React.FC<SubscriptionProps> = () => {
  return (
    <DocumentationPage pageName="Рекуррентные платежи" pageTitle="Рекуррентные платежи">
      <div className="interface-rest">
        <h1>Запрос на регистрацию рекуррентного платежа</h1>
        <p>
          Метод:
          <CodeBox isInline>POST</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/recurrent/register/</CodeBox>
        </p>
        <p>
          Тестовый Host:
          <CodeBox isInline>https://stage.ioka.kz</CodeBox>
        </p>
        <p>
          Боевой Host:
          <CodeBox isInline>https://ioka.kz</CodeBox>
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
        <p>Параметры запроса:</p>
        <div className="table-container">
          <Table
            headRows={headRows}
            rows={registerSubscriptionRows}
            className="documentation-table"
          />
        </div>
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table
            headRows={headRows}
            rows={registerSubscriptionResRows}
            className="documentation-table"
          />
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          POST /api/recurrent/register/
          <br />
          Host: https://stage.ioka.kz
          <br />
          Content-type: application/json
          <br />
          Accept-Language: ru
          <br />
          Authorization: Bearer {'<SECRET_KEY из личного кабинета>'}
          <br />
          <br />
          &#123;
          <br />
          &nbsp;&nbsp;"amount": 3000,
          <br />
          &nbsp;&nbsp;"currency": 398,
          <br />
          &nbsp;&nbsp;"email": "user@example.com",
          <br />
          &nbsp;&nbsp;"token": "token",
          <br />
          &nbsp;&nbsp;"client_id": "12345",
          <br />
          &nbsp;&nbsp;"start_date": "2021-11-11T11:11:11.123456Z",
          <br />
          &nbsp;&nbsp;"interval": "MONTH",
          <br />
          &nbsp;&nbsp;"period": 1,
          <br />
          &nbsp;&nbsp;"callback_url": "http://shop.kz/callback"
          <br />
          &#125;
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"id": 1,
          <br />
          &nbsp;&nbsp;"status": "ACTIVE",
          <br />
          &nbsp;&nbsp;"amount": 3000,
          <br />
          &nbsp;&nbsp;"currency": 398,
          <br />
          &nbsp;&nbsp;"email": "post@mail.kz",
          <br />
          &nbsp;&nbsp;"token": "token",
          <br />
          &nbsp;&nbsp;"client_id": "12345",
          <br />
          &nbsp;&nbsp;"start_date": "2021-11-11T11:11:11.123456Z",
          <br />
          &nbsp;&nbsp;"interval": "MONTH",
          <br />
          &nbsp;&nbsp;"period": 1,
          <br />
          &nbsp;&nbsp;"callback_url": "http://shop.kz/callback"
          <br />
          &#125;
        </CodeBox>
        <br />
        <br />
        <h1>Запрос на получение активного рекуррентного платежа</h1>
        <p>
          Метод:
          <CodeBox isInline>GET</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/recurrent/&#123;id&#125;/</CodeBox>
        </p>
        <p>
          Тестовый Host:
          <CodeBox isInline>https://stage.ioka.kz</CodeBox>
        </p>
        <p>
          Боевой Host:
          <CodeBox isInline>https://ioka.kz</CodeBox>
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
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table
            headRows={headRows}
            rows={registerSubscriptionResRows}
            className="documentation-table"
          />
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          GET /api/recurrent/1/
          <br />
          Host: https://stage.ioka.kz
          <br />
          Content-type: application/json
          <br />
          Accept-Language: ru
          <br />
          Authorization: Bearer {'<SECRET_KEY из личного кабинета>'}
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"id": 1,
          <br />
          &nbsp;&nbsp;"status": "ACTIVE",
          <br />
          &nbsp;&nbsp;"amount": 3000,
          <br />
          &nbsp;&nbsp;"currency": 398,
          <br />
          &nbsp;&nbsp;"email": "post@mail.kz",
          <br />
          &nbsp;&nbsp;"token": "token",
          <br />
          &nbsp;&nbsp;"client_id": "12345",
          <br />
          &nbsp;&nbsp;"start_date": "2021-11-11T11:11:11.123456Z",
          <br />
          &nbsp;&nbsp;"interval": "MONTH",
          <br />
          &nbsp;&nbsp;"period": 1,
          <br />
          &nbsp;&nbsp;"callback_url": "http://shop.kz/callback"
          <br />
          &#125;
        </CodeBox>
        <br />
        <br />
        <h1>Запрос на отмену активного рекуррентного платежа</h1>
        <p>
          Метод:
          <CodeBox isInline>POST</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/recurrent/&#123;id&#125;/cancel/</CodeBox>
        </p>
        <p>
          Тестовый Host:
          <CodeBox isInline>https://stage.ioka.kz</CodeBox>
        </p>
        <p>
          Боевой Host:
          <CodeBox isInline>https://ioka.kz</CodeBox>
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
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table
            headRows={headRows}
            rows={registerSubscriptionResRows}
            className="documentation-table"
          />
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          POST /api/recurrent/1/cancel/
          <br />
          Host: https://stage.ioka.kz
          <br />
          Content-type: application/json
          <br />
          Accept-Language: ru
          <br />
          Authorization: Bearer {'<SECRET_KEY из личного кабинета>'}
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"id": 1,
          <br />
          &nbsp;&nbsp;"status": "ACTIVE",
          <br />
          &nbsp;&nbsp;"amount": 3000,
          <br />
          &nbsp;&nbsp;"currency": 398,
          <br />
          &nbsp;&nbsp;"email": "post@mail.kz",
          <br />
          &nbsp;&nbsp;"token": "token",
          <br />
          &nbsp;&nbsp;"client_id": "12345",
          <br />
          &nbsp;&nbsp;"start_date": "2021-11-11T11:11:11.123456Z",
          <br />
          &nbsp;&nbsp;"interval": "MONTH",
          <br />
          &nbsp;&nbsp;"period": 1,
          <br />
          &nbsp;&nbsp;"callback_url": "http://shop.kz/callback"
          <br />
          &#125;
        </CodeBox>
        <br />
        <br />
      </div>
    </DocumentationPage>
  )
}

export default Subscription
