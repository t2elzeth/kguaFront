import { Table } from "@Components";
import React from "react";

import { CodeBox } from "../../components";
import { DocumentationPage } from "../../templates";

export type ConfirmPaymentProps = {};

const requestRows = [
  [
  "token",
  "string",
  "да",
  "Идентификатор связки (токен платежной карты), созданной ранее",
  ],
  ["reference", "integer", "да", "Уникальный идентификатор платежа"],
];

const requestHeadRows = ["Поле", "Тип", "Обязательность", "Описание"];

const responseRows = [
  ["error_code", "integer", "да", "Код ошибки"],
  [
    "error_message",
    "string",
    "да",
    "Описание ошибки на языке, переданной в заголовке запроса",
  ],
];

const responseHeadRows = ["Поле", "Тип", "Обязательность", "Описание"];

const ConfirmPayment: React.FC<ConfirmPaymentProps> = () => {
  return (
    <DocumentationPage
      pageName="Подтверждение платежа по сохраненной карте"
      pageTitle="Запрос на подтверждение платежа по сохраненной карте"
    >
      <div className="interface-rest">
        <h1>Запрос на подтверждение платежа по сохраненной карте</h1>
        <p>
          Используется для подтверждения платежа, ранее зарегистрированного по сохраненной карте
        </p>
        <p>
          Метод:
          <CodeBox isInline>POST</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/payments/confirm/</CodeBox>
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
          <Table headRows={requestHeadRows} rows={requestRows} className="documentation-table"/>
        </div>
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table headRows={responseHeadRows} rows={responseRows} className="documentation-table"/>
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          POST /api/payments/confirm/
          <br />
          Host: https://stage.ioka.kz
          <br />
          Content-type: application/json
          <br />
          Accept-Language: ru
          <br />
          Bearer
          {' '}
          {"<SECRET_KEY из личного кабинета>"}
          <br />
          <br />
          &#123;
          <br />
          &nbsp;&nbsp;"reference": 42,
          <br />
          &nbsp;&nbsp;"token": "token"
          <br />
          &#125;
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"error_code": 0,
          <br />
          &nbsp;&nbsp;"error_message": "Сумма успешно заблокирована с карты клиента."
          <br />
          &#125;
        </CodeBox>
      </div>
    </DocumentationPage>
  );
};

export default ConfirmPayment;
