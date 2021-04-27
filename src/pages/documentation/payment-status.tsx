import { Table } from '@Components'
import React from 'react'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

export type PaymentStatusProps = { any }

const sampleRows = [['reference', 'integer', 'да', 'Уникальный идентификатор платежа']]

const sampleHeadRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const rows = [
  ['error_code', 'integer', 'да', 'Код ошибки'],
  ['error_message', 'string', 'да', 'Описание ошибки на языке, переданном в заголовке запроса'],
  ['error_details', 'object', 'нет', 'Детали ошибки'],
  ['reference', 'integer', 'да', 'Уникальный идентификатор платежа'],
  ['amount', 'integer', 'да', 'Сумма платежа'],
  [
    'currency',
    'integer',
    'нет',
    'Код валюты в стандарте ISO 4217. Если не указан, то используется значение по умолчанию (398 - KZT)',
  ],
  [
    'order_id',
    'integer',
    'да',
    'Номер (идентификатор) заказа в системе магазина, уникален для каждого магазина в пределах системы',
  ],
  [
    'tr_type',
    'integer',
    'нет',
    'Тип транзакции (0 или 1). При tr_type = 0 после успешной авторизации, платеж автоматически будет списан со счета клиента. При tr_type = 1, после успешной авторизации сумма блокирируется и необходимо вызвать метод списание платежа. По умолчанию выставлен tr_type = 0',
  ],
  ['email', 'string', 'нет', 'Почтовый адрес (куда будет выслан электронный счет оплаты)'],
  [
    'phone',
    'string',
    'нет',
    'Телефонный номер пользователя должен быть указан в международном формате без знака «+»',
  ],
  ['additional_params', 'object', 'нет', ''],
  ['ip', 'string', 'нет', ''],
  ['back_url', 'string', 'да', 'Ссылка, служащая для перенаправления клиента на сайт'],
  ['callback_url', 'string', 'нет', 'Ссылка, служащая для приема статуса платежа после оплаты'],
  [
    'template',
    'string',
    'нет',
    'Тип шаблона формы оплаты. Выберите один из: 1) FLAT 2) 3D (по умалчанию) 2) CUSTOM',
  ],
  [
    'client_id',
    'string',
    'нет',
    'Номер (идентификатор) клиента в системе магазина. Используется для реализации функциональности связок. Указание этого параметра при платежах по связке необходимо - в противном случае платеж будет не успешен.',
  ],
]

const headRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const withdrawRows = [
  ['amount', 'integer', 'да', 'Сумма списания'],
  ['date', 'datetime', 'да', 'Дата списания'],
]

const withdrawHeadRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const cardRaws = [
  ['holder', 'string', 'нет', 'Данные владельца платежной карты'],
  ['pan_masked', 'string', 'нет', 'Усеченный номер платежной карты'],
  ['expiry_date', 'date', 'нет', 'Срок годности платежной карты'],
  ['token', 'string', 'нет', 'Идентификатор связки (токен платежной карты)'],
]

const RefundPayment: React.FC<PaymentStatusProps> = () => {
  return (
    <DocumentationPage pageName="Статус платежа" pageTitle="Запрос состояния платежа">
      <div className="interface-rest">
        <h1>Запрос состояния платежа</h1>
        <p>Для запроса состояния зарегистрированного платежа.</p>
        <p>
          Метод:
          <CodeBox isInline>GET</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/payments/&#123;reference&#125;/status/</CodeBox>
        </p>
        <p>
          Тестовый Host:
          <CodeBox isInline>https://stage.ioka.kz</CodeBox>
        </p>
        <p>
          Боевой Host:
          <CodeBox isInline>http://ioka.kz</CodeBox>
        </p>
        <p>Параметры запроса:</p>
        <div className="table-container">
          <Table headRows={sampleHeadRows} rows={sampleRows} className="documentation-table" />
        </div>
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table headRows={headRows} rows={rows} className="documentation-table" />
        </div>
        <p>
          Элемент
          <b> withdraw </b>
          состоит из параметров:
        </p>
        <div className="table-container">
          <Table headRows={withdrawHeadRows} rows={withdrawRows} className="documentation-table" />
        </div>
        <p>
          Элемент
          <b> refunds </b>
          состоит из параметров:
        </p>
        <div className="table-container">
          <Table headRows={withdrawHeadRows} rows={withdrawRows} className="documentation-table" />
        </div>
        <p>
          Элемент
          <b> card </b>
          состоит из параметров:
        </p>
        <div className="table-container">
          <Table headRows={withdrawHeadRows} rows={cardRaws} className="documentation-table" />
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          POST /api/payments/1/status/
          <br />
          Host: https://stage.ioka.kz
          <br />
          Content-type: application/json
          <br />
          Accept-Language: ru
          <br />
          Authorization: Bearer {'<Токен из личного кабинета>'}
          <br />
          <br />
          &#123;
          <br />
          &nbsp;&nbsp;"error_code": 0,
          <br />
          &nbsp;&nbsp;"error_message": "Проведена полная авторизация суммы заказа",
          <br />
          &nbsp;&nbsp;"error_details": "",
          <br />
          &nbsp;&nbsp;"reference": 10113,
          <br />
          &nbsp;&nbsp;"order_id": 4,
          <br />
          &nbsp;&nbsp;"amount": 150000,
          <br />
          &nbsp;&nbsp;"currency": 398,
          <br />
          &nbsp;&nbsp;"email": "user@example.com",
          <br />
          &nbsp;&nbsp;"phone": "string",
          <br />
          &nbsp;&nbsp;"client_id": 0,
          <br />
          &nbsp;&nbsp;"additional_params": null,
          <br />
          &nbsp;&nbsp;"ip": null,
          <br />
          &nbsp;&nbsp;"back_url": "http://ioka.kz/",
          <br />
          &nbsp;&nbsp;"callback_url": "http://ioka.kz/",
          <br />
          &nbsp;&nbsp;"merchant": null,
          <br />
          &nbsp;&nbsp;"is_save_card": false,
          <br />
          &nbsp;&nbsp;"features": "PAYMENT",
          <br />
          &nbsp;&nbsp;"template": "3D",
          <br />
          &nbsp;&nbsp;"is3ds": false,
          <br />
          &nbsp;&nbsp;"withdraw": &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"amount": 0,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"date": 0
          <br />
          &nbsp;&nbsp;&#125;,
          <br />
          &nbsp;&nbsp;"refunds": &#123;&#125;,
          <br />
          &nbsp;&nbsp;"card": &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"id": 1,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"holder": "CARDHOLDER NAME",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"pan_masked": "555555******5599",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"expiry_date": "2024-12-31"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"token": "",
          <br />
          &nbsp;&nbsp;&#125;,
          <br />
          &#125;
        </CodeBox>
      </div>
    </DocumentationPage>
  )
}

export default RefundPayment
