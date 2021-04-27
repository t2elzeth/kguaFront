import { Table } from "@Components";
import * as React from "react";

import { CodeBox } from "../../components";
import { DocumentationPage } from "../../templates";

const sampleRows = [
  ["amount", "integer", "да", "Сумма платежа"]
];

const sampleHeadRows = ["Поле", "Тип", "Обязательность", "Описание"];

const rows = [
  ["status", "204 No Content"]
];

const headRows = ["Поле", "Описание"];

const PaymentChange= () => {
  return (
    <DocumentationPage
      pageName="Изменения суммы платежа"
      pageTitle="Запрос на изменения суммы платежа"
    >
      <div className="interface-rest">
        <h1>Запрос на изменения суммы платежа</h1>
        <p>
          Метод:
          <CodeBox isInline>PUT</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/payments/{'{reference}'}/amount/</CodeBox>
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
          Bearer {"<SECRET_KEY из личного кабинета>"}
        </CodeBox>
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
          PUT /api/payments/{'{reference}'}/amount/
          <br />
          Host: https://stage.ioka.kz
          <br />
          Content-type: application/json
          <br />
          Accept-Language: ru
          <br />
          Authorization: Bearer {"<SECRET_KEY из личного кабинета>"}
          <br />
          <br />
          &#123;
          <br />
          &nbsp;&nbsp;"amount": 3000
          <br/>
          &#125;
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"status": 204 No Content
          <br />
          &#125;
        </CodeBox>
      </div>
    </DocumentationPage>
  );
};

export default PaymentChange;
