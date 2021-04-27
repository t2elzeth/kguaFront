import { Table } from "@Components";
import React from "react";

import { CodeBox } from "../../components";
import { DocumentationPage } from "../../templates";

export type SaveCardWOutProps = {};

const saveCardsRows = [
  [
    "order_id",
    "integer",
    "да",
    "Номер (идентификатор) заказа в системе магазина, уникален для каждого магазина в пределах системы",
  ],
  [
    "client_id",
    "integer",
    "да",
    "Номер (идентификатор) клиента в системе магазина",
  ],
  [
    "back_url",
    "string",
    "да",
    "Ссылка, служащая для перенаправления клиента на сайт мерчанта, после сохранения карты",
  ],
  [
    "callback_url",
    "string",
    "нет",
    "Ссылка, служащая для приема статуса попытки сохранение карты",
  ],
  [
    "template",
    "string",
    "нет",
    "Тип шаблона формы оплаты. Выберите один из: 1) FLAT 2) 3D (по умолчанию) 2) CUSTOM",
  ],
];

const sampleHeadRows = ["Поле", "Тип", "Обязательность", "Описание"];

const rows = [
  ["reference", "integer", "да", "Уникальный идентификатор платежа"],
  ["access_hash", "string", "да", "Хэш доступа, для формы"],
  ["url", "string", "да", "Адрес на форму оплаты"],
];

const headRows = ["Поле", "Тип", "Обязательность", "Описание"];

const SaveCardWOut: React.FC<SaveCardWOutProps> = () => {
  return (
    <DocumentationPage
      pageName="Сохранение карты без оплаты"
      pageTitle="Запрос на сохранение карты без оплаты"
    >
      <div className="interface-rest">
        <h1>Запрос на сохранение карты без оплаты</h1>
        <p>После того как ваш клиент заполнит карточные данные в форме, происходит верификация держателя карты без списания средств с его счёта. Сохраненной карте будет присвоен уникальный token, используя который можно списывать с этой карты средства, не прибегая к проверке аутентификационных данных (CVC, 3D-Secure) при совершении последующих платежей.</p>
        <p>Список сохраненных карт клиента можно получить обратившись к методу <CodeBox isInline>/api/cards/</CodeBox> как  описано <a href="/documentation/get-saved-cards" className="link">здесь.</a></p>
        <p>
          Метод:
          <CodeBox isInline>POST</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/payments/card-save/</CodeBox>
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
          <Table headRows={sampleHeadRows} rows={saveCardsRows} className="documentation-table" />
        </div>
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table headRows={headRows} rows={rows} className="documentation-table" />
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          POST /api/payments/card-save/
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
          &nbsp;&nbsp;"client_id": 48,
          <br />
          &nbsp;&nbsp;"order_id": 10003265,
          <br />
          &nbsp;&nbsp;"template": "FLAT",
          <br />
          &nbsp;&nbsp;"back_url": "http://ioka.kz/back"
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
          &nbsp;&nbsp;"url":
          "https://stage.ioka.kz/forms/2e01a5d6-3c61-452d-990a-b10455428030/"
          <br />
          &#125;
        </CodeBox>
      </div>
    </DocumentationPage>
  );
};

export default SaveCardWOut;
