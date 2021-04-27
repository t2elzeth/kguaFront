import { Table } from '@Components'
import React from 'react'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

export type RefundPaymentProps = { any }

const sampleRows = [
  ['reference', 'integer', 'да', 'Уникальный идентификатор платежа'],
  ['amount', 'integer', 'да', 'Сумма возврата'],
  ['reason', 'string', 'нет', 'Примечание к возрата'],
]

const sampleHeadRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const rows = [
  ['error_code', 'integer', 'да', 'Код ошибки'],
  ['error_message', 'string', 'да', 'Описание ошибки на языке, переданном в заголовке запроса'],
]

const headRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const RefundPayment: React.FC<RefundPaymentProps> = () => {
  return (
    <DocumentationPage pageName="Возврат платежа" pageTitle="Запрос на возврат платежа">
      <div className="interface-rest">
        <h1>Запрос на возврат платежа</h1>
        <p>
          По этому запросу средства по указанному заказу будут возвращены плательщику. Запрос
          закончится ошибкой в случае, если средства по этому заказу не были списаны. Система
          позволяет возвращать средства более одного раза, но в общей сложности не более
          первоначальной суммы списания.
        </p>
        <p>
          Метод:
          <CodeBox isInline>POST</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/payments/refund/</CodeBox>
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
        <p>Пример запроса:</p>
        <CodeBox>
          POST /api/payments/refund/
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
          &nbsp;&nbsp;"amount": 2000,
          <br />
          &nbsp;&nbsp;"reference": 584300427369,
          <br />
          &nbsp;&nbsp;"reason": "Причина"
          <br />
          &#125;
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"error_code": 5,
          <br />
          &nbsp;&nbsp;"error_message": "Платеж не найден"
          <br />
          &#125;
        </CodeBox>
      </div>
    </DocumentationPage>
  )
}

export default RefundPayment
