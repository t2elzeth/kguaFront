import { Table } from '@Components'
import React from 'react'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

export type SaveCardsProps = { any }

const saveCardRows = [
  [
    'order_id',
    'integer',
    'да',
    'Номер (идентификатор) заказа в системе магазина, уникален для каждого магазина в пределах системы',
  ],
  [
    'phone',
    'string',
    'да',
    'Номер телефона клиента к которому будет привязываться карта. Телефонный номер пользователя должен быть указан в международном формате без знака «+»',
  ],
  [
    'order_id',
    'integer',
    'да',
    'Номер (идентификатор) заказа в системе магазина, уникален для каждого магазина в пределах системы',
  ],
  [
    'additional_params',
    'object',
    'нет',
    "Дополнительные параметры заказа, которые сохраняются для просмотра из личного кабинета продавца. Дополнительные параметры следует указывать в следующем формате. '_': '_' Каждую новую пару имени и значения параметра следует отделять запятой",
  ],
  [
    'back_url',
    'string',
    'да',
    'Ссылка, служащая для перенаправления клиента на сайт мерчанта, после проведения операции',
  ],
  [
    'callback_url',
    'string',
    'да',
    'Ссылка, служащая для приема статуса платежа после оплаты. После того, как ваш клиент завершит операцию, на указанный URL отправляется POST запрос со статусом платежа',
  ],
  [
    'client_id',
    'integer',
    'да',
    'Номер (идентификатор) клиента в системе магазина. Используется для реализации функциональности связок. Указание этого параметра при операциях по связке необходимо - в противном случае операция будет не успешен',
  ],
  [
    'fingerprint',
    'base64-string',
    'да',
    'Уникальный fingerprint устройства с которого будет происходит сохранение карты и последующее ее использование',
  ],
]

const sampleHeadRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const rows = [
  ['reference', 'integer', 'Уникальный идентификатор платежа'],
  ['access_hash', 'string', 'Уникалный хэш для доступа к форме по вводу карточных данных'],
  ['url', 'string', 'Уникальная ссылка на форму оплату'],
]

const responseHeadRows = ['Поле', 'Тип', 'Описание']

const SaveCards: React.FC<SaveCardsProps> = () => {
  return (
    <DocumentationPage
      pageName="Сохранение карт в системе"
      pageTitle="Сохранение карт в хранилище MasterPass"
    >
      <div className="interface-rest">
        <h1>Сохранение карт в хранилище MasterPass</h1>
        <p>Запрос на сохранение карты в хранилище MasterPass</p>
        <p>
          Метод:
          <CodeBox isInline>POST</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/payments/master-pass/save-card/</CodeBox>
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
          <Table headRows={sampleHeadRows} rows={saveCardRows} className="documentation-table" />
        </div>
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table headRows={responseHeadRows} rows={rows} className="documentation-table" />
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          POST /api/payments/master-pass/save-card
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
          &nbsp;&nbsp;"order_id": 10003265,
          <br />
          &nbsp;&nbsp;"phone": "87*********",
          <br />
          &nbsp;&nbsp;"back_url": "http://shop.kz/",
          <br />
          &nbsp;&nbsp;"callback_url": "http://shop.kz/callback",
          <br />
          &nbsp;&nbsp;"client_id": "3e88ac5e-8989-3333-9ffa-a8200d10c13c",
          <br />
          &nbsp;&nbsp;"fingerprint":
          "YXNkb2ZzZGhqZmhkc2praHNha2poc2FrbGdoYXNramhzYWRramYgaGtsd2plZmhrc25mbGtzZGhma2xqc2hmc2QKZnNqc2xrZmgxaGVrcXdsamZsc2RobHNkCmZqZmthaycKO2Fza2tsO3NkaGYnYWZkc2tqJ2RzaHNqO2cnc0dMClM7J0YKR1NEJ1NERwpTSlMKU0tEClNECkdTQURLTDtTRDtHU0RHU0Q7R0RGU0Q7QUxHU0FHSidGSEdTREdLU0onU0Q7SkZMSw==",
          <br />
          &#125;
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"reference": 10115,
          <br />
          &nbsp;&nbsp;"access_hash": "2e01a5d6-3c61-452d-990a-b10455428030",
          <br />
          &nbsp;&nbsp;"url": "https://stage.ioka.kz/forms/2e01a5d6-3c61-452d-990a-b10455428030/"
          <br />
          &#125;
        </CodeBox>
        <p>Пример коллбэка:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"error_code": 130,
          <br />
          &nbsp;&nbsp;"error_message": "Карта сохранена",
          <br />
          &nbsp;&nbsp;"client_id": "3e88ac5e-8989-3333-9ffa-a8200d10c13c"
          <br />
          &nbsp;&nbsp;"phone": "87*********"
          <br />
          &nbsp;&nbsp;"reference": "50311"
          <br />
          &nbsp;&nbsp;"token": "3ca1e02acc94021147b43523ed118eeb869cc41fb654464c9452292ca9dedf82"
          <br />
          &#125;
        </CodeBox>
      </div>
    </DocumentationPage>
  )
}

export default SaveCards
