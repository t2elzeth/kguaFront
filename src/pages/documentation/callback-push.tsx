import React from 'react'
import { Table } from '@Components'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

const operationTypeRows = ['Операция', 'Тип транзакции', 'status', 'error_code']
const exampleHeadRows = ['Поле', 'Тип', 'Описание']

const sampleRows = [
  ['Списание средств', 'Одностадийная (tr_type=0)', 'paid', '0'],
  ['Удержание средств', 'Двухстадийная (tr_type=1)', 'blocked', '102'],
  ['Автосписание средств', 'Двухстадийная (tr_type=1)', 'withdrawn', '106'],
]

const cardHeadRows = [
  ['holder', 'string', 'Данные владельца платежной карты'],
  ['pan_masked', 'string', 'Усеченный номер платежной карты'],
  ['expiry_date', 'date', 'Срок годности платежной карты'],
  ['token', 'string', 'Идентификатор связки (токен платежной карты)'],
  ['brand', 'string', 'Бренд карты'],
]

const exampleRows = [
  ['status', 'string', 'Статус операции (paid, blocked, withdrawn, failed)'],
  ['reference', 'int', 'Уникальный идентификатор платежа'],
  ['client_id', 'int', 'Номер (идентификатор) клиента в системе магазина. '],
  [
    'order_id',
    'int',
    'Номер (идентификатор) заказа в системе магазина, уникален для каждого магазина в пределах системы',
  ],
  [
    'tr_type',
    'int',
    'Тип транзакции (0 или 1). При tr_type = 0 после успешной авторизации, платеж автоматически будет списан со счета клиента. При tr_type = 1, после успешной авторизации сумма блокируется и необходимо вызвать метод списание платежа. По умолчанию выставлен tr_type = 0',
  ],
  ['is_save_card', 'bool', 'Сохранена ли платежная карта'],
  ['amount', 'string', 'Сумма платежа'],
  [
    'currency',
    'int',
    'Код валюты в стандарте ISO 4217. Если не указан, то используется значение по умолчанию (398 - KZT)',
  ],
  ['error_code', 'int', 'Код ошибки'],
  ['error_message', 'string', 'Описание ошибки на языке, переданном в заголовке запроса'],
]

const CallBackPush = () => {
  return (
    <DocumentationPage pageName="Callback-уведомления" pageTitle="Callback-уведомления">
      <div className="interface-rest">
        <h1>Callback-уведомления</h1>
        <p>
          Продавец может получать от платёжного шлюза callback-уведомления (уведомления обратного
          вызова) об операциях над заказами, указанных в таблице ниже.
        </p>

        <p>Типы операций, на которые могут быть получены уведомления:</p>
        <div className="table-container">
          <Table headRows={operationTypeRows} rows={sampleRows} className="documentation-table" />
        </div>

        <p>
          После того, как покупатель завершит платеж, на указанный продавцом URL (callback_url,
          указанный при регистрации заказа) отправляется POST запрос со сведениями о заказе. Помимо
          сведений о заказе, уведомления отправляемые платежным шлюзом содержат контрольную сумму
          сведений о заказе, которая будет указана в заголовке <b>X-Signature</b> при отправке
          запроса. Контрольная сумма позволяет убедиться, что callback-уведомление действительно
          было отправлено платежным шлюзом.
        </p>
        <p>
          Платежный шлюз генерирует контрольную сумму, используя алгоритм HMAC (hash-based message
          authentication code) вместе с SHA-256. В качестве ключа используется secret key продавца.
        </p>

        <h1>Пример callback-уведомлений:</h1>
        <p>Успешно:</p>
        <CodeBox>
          POST /ioka-callback/
          <br />
          Host: https://testshop.kz
          <br />
          Content-type: application/json
          <br />
          X-Signature: {'<Контрольная сумма сведений о заказа>'}
          <br />
          &#123;
          <br />
          &nbsp;&nbsp;"status": 'blocked',
          <br />
          &nbsp;&nbsp;"reference": 20,
          <br />
          &nbsp;&nbsp;"client_id": null,
          <br />
          &nbsp;&nbsp;"order_id": 45793,
          <br />
          &nbsp;&nbsp;"tr_type": 1,
          <br />
          &nbsp;&nbsp;"is_save_card": false,
          <br />
          &nbsp;&nbsp;"currency": 1,
          <br />
          &nbsp;&nbsp;"card":{' '}
          {`
            {
              "holder": 'SOME CARDHOLDER',
              "pan_masked": '555555******5599',
              "expiry_date": '2024-12-31',
              "token": null,
              "brand": "Mastercard"
            }
          `}
          ,
          <br />
          &nbsp;&nbsp;"error_code": 102,
          <br />
          &nbsp;&nbsp;"error_message": 'Сумма успешно заблокирована с карты клиента.',
          <br />
          &nbsp;&nbsp;"amount": '20000.00'
          <br />
          &#125;
        </CodeBox>
        <p>Неуспешно:</p>
        <CodeBox>
          POST /ioka-callback/
          <br />
          Host: https://testshop.kz
          <br />
          Content-type: application/json
          <br />
          X-Signature: {'<Контрольная сумма сведений о заказа>'}
          <br />
          &#123;
          <br />
          &nbsp;&nbsp;"status": 'failed',
          <br />
          &nbsp;&nbsp;"reference": 20,
          <br />
          &nbsp;&nbsp;"client_id": null,
          <br />
          &nbsp;&nbsp;"order_id": 45793,
          <br />
          &nbsp;&nbsp;"tr_type": 1,
          <br />
          &nbsp;&nbsp;"is_save_card": false,
          <br />
          &nbsp;&nbsp;"currency": 1,
          <br />
          &nbsp;&nbsp;"card":{' '}
          {`
            {
              "holder": 'SOME CARDHOLDER',
              "pan_masked": '444444******6666',
              "expiry_date": '2024-12-31',
              "token": null,
              "brand": "Visa"
            }
          `}
          ,
          <br />
          &nbsp;&nbsp;"error_code": 110,
          <br />
          &nbsp;&nbsp;"error_message": 'Ошибка транзакции.',
          <br />
          &nbsp;&nbsp;"amount": '20000.00'
          <br />
          &#125;
        </CodeBox>
        <div className="table-container">
          <Table headRows={exampleHeadRows} rows={exampleRows} className="documentation-table" />
          <p>Элемент card состоит из параметров:</p>
          <br />
          <Table headRows={exampleHeadRows} rows={cardHeadRows} className="documentation-table" />
        </div>
        <h1>Алгоритм обработки callback-уведомлений</h1>
        <p>
          1. Прочитайте заголовок <b>X-Signature</b>. <br />
          2. Приготовьте данные для подписания из тела запроса. <br />
          3. Определите ожидаемую подпись использую HMAC. <br />
          4. Сравните вашу подпись с подписью в заголовке <b>X-Signature</b> и убедитесь что они
          одинаковы.
        </p>
        <CodeBox>
          <code>
            import hmac <br />
            import json <br />
            import hashlib <br />
            <br />
            key = "my_secret_key" # Secret Key магазина
            <br />
            signature_from_ioka = "abba1234" # Прочитано с заголовка запроса
            <br />
            <br />
            # Пример json_payload
            <br />
            json_payload = "&#123;
            {`
  "status": "paid",
  "reference": 185,
  "client_id": null,
  "order_id": 438566,
  "tr_type": 0,
  "is_save_card": false
  "currency": 398,
  "card": {
    "holder": "HOLDER NAME",
    "pan_masked": "555555******5599",
    "expiry_date": "2024-12-31",
    "token": null,
    "brand": "Mastercard"
    },
  "error_code": 0,
  "error_message": "Проведена полная авторизация суммы заказа.",
  "amount": "200000.00"
  `}
            &#125;"
            <br />
            <br />
            data_encoded = json_payload.encode() <br />
            my_hash = hmac.new(key=key, msg=data_encoded, digestmod=hashlib.sha256) <br />
            my_signature = my_hash.hexdigest() <br />
            <br />
            if my_signature != signature_from_ioka: <br />
            &nbsp;&nbsp;# Подписи не совпадают - данные ненадежны
            <br />
            &nbsp;&nbsp;pass <br />
            else: <br />
            &nbsp;&nbsp;# Подписи совпадают <br />
            &nbsp;&nbsp;pass
          </code>
        </CodeBox>
      </div>
    </DocumentationPage>
  )
}

export default CallBackPush
