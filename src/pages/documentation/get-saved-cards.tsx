import { Table } from "@Components";
import React from "react";

import { CodeBox } from "../../components";
import { DocumentationPage } from "../../templates";

export type GetSavedCardsProps = {};

const requestRows1 = [
  [
    "client_id",
    "integer",
    "да",
    "Номер (идентификатор) клиента в системе магазина.",
  ],
];

const sampleHeadRows = ["Поле", "Тип", "Обязательность", "Описание"];

const responseRows1 = [
  ["merchant_id", "integer", "да", "Номер (идентификатор) магазина."],
  [
    "client_id",
    "integer",
    "да",
    "Номер (идентификатор) клиента в системе магазина.",
  ],
  ["holder", "string", "да", "ФИО держателя карты"],
  ["token", "string", "да", "Идентификатор связки (токен платежной карты)"],
  ["expiry_date", "string", "да", "Срок действия карты"],
  ["pan_masked", "string", "да", "Маскированный PAN карты"],
  ["is3ds", "bool", "нет", "Является ли карта защищенным 3DSecure"],
  ["brand", "string", "да", "Бренд карты"],
  ["emitter", "string", "нет", "Банк, выпустивший карту"],
];

const headRows = ["Поле", "Тип", "Обязательность", "Описание"];

const GetSavedCards: React.FC<GetSavedCardsProps> = () => {
  return (
    <DocumentationPage
      pageName="Возврат платежа"
      pageTitle="Запрос на получение сохраненных карт клиента"
    >
      <div className="interface-rest">
        <h1>Запрос на получение сохраненных карт клиента</h1>
        <p>Успешный запрос вернет список сохраненных карт вашего клиента.</p>
        <p>
          Метод:
          <CodeBox isInline>GET</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/cards/</CodeBox>
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
          <Table headRows={sampleHeadRows} rows={requestRows1} className="documentation-table"/>
        </div>
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table headRows={headRows} rows={responseRows1} className="documentation-table"/>
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          GET /api/cards/?client_id=1
          <br />
          Host: https://stage.ioka.kz
          <br />
          Authorization: Bearer {"<Токен из личного кабинета>"}
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          [
          <br />
          &nbsp;&nbsp;&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"merchant_id": 1,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"client_id": 1,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"holder": "CARDHOLDER NAME",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"token": "token",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"expiry_date": "2026-09-30",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"pan_masked": "411111******1111",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"is3ds": null,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"brand": "VISA",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"emitter": null,
          <br />
          &nbsp;&nbsp;&#125;
          <br />
]
</CodeBox>
        <br />
        <h1>Запрос на получение сохраненной карты по токену карты</h1>
        <p>Успешный запрос вернет одну сохраненную карту.</p>
        <p>
          Метод:
          <CodeBox isInline>GET</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/cards/&#123;token&#125;/</CodeBox>
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
          <Table headRows={sampleHeadRows} rows={requestRows1} className="documentation-table"/>
        </div>
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table headRows={headRows} rows={responseRows1} className="documentation-table" />
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          GET /api/cards/&#123;token&#125;/
          <br />
          Host: https://stage.ioka.kz
          <br />
          Authorization: Bearer {"<Токен из личного кабинета>"}
        </CodeBox>
        <p>Пример ответа:</p>
        <CodeBox>
          &#123;
          <br />
          &nbsp;&nbsp;"merchant_id": 1,
          <br />
          &nbsp;&nbsp;"client_id": 1,
          <br />
          &nbsp;&nbsp;"holder": "CARDHOLDER NAME",
          <br />
          &nbsp;&nbsp;"token": "token",
          <br />
          &nbsp;&nbsp;"expiry_date": "2026-09-30",
          <br />
          &nbsp;&nbsp;"pan_masked": "411111******1111",
          <br />
          &nbsp;&nbsp;"is3ds": null,
          <br />
          &nbsp;&nbsp;"brand": "VISA",
          <br />
          &nbsp;&nbsp;"emitter": null,
          <br />
          &#125;
        </CodeBox>
      </div>
    </DocumentationPage>
  );
};

export default GetSavedCards;
