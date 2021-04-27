import { Table } from '@Components'
import React from 'react'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

export type CancelPaymentProps = { any }

const sampleRows = [['reference', 'integer', 'да', 'Уникальный идентификатор платежа']]

const sampleHeadRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const rows = [
  ['error_code', 'integer', 'да', 'Код ошибки'],
  ['error_message', 'string', 'да', 'Описание ошибки на языке, переданном в заголовке запроса'],
]

const headRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const CancelPayment: React.FC<CancelPaymentProps> = () => {
  return (
    <DocumentationPage pageName="Отмена платежа" pageTitle="Запрос на отмену платежа">
      <div className="interface-rest">
        <h1>Запрос на отмену платежа</h1>
        <p>
          Функция отмены доступна в течение ограниченного времени. Операция отмены оплаты может быть
          совершена только один раз. Если она закончится ошибкой, то повторная операция отмены
          платежа не пройдет.
        </p>
        <p>
          Метод:
          <CodeBox isInline>POST</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/payments/cancel/</CodeBox>
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
          POST /api/payments/cancel/
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
          &nbsp;&nbsp;"reference": 921215492907
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

export default CancelPayment
