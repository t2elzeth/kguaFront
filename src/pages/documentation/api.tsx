import { Table } from "@Components";
import React from "react";

import { DocumentationPage } from "../../templates";

export type DocumentationProps = {};

const sampleRows = [
  ["amount", "integer", "да", "Сумма платежа"],
  [
    "currency",
    "string",
    "да",
    "Код валюты платежа ISO 4217. Если не указано, то используется значение по умолчанию.",
  ],
  ["order_id", "integer", "да", "Номер заказа"],
  [
    "tr_type",
    "integer",
    "нет",
    "Тип транзакции (0 или 1). При tr_type = 0 после успешной авторизации, платеж автоматически будет списан со счета клиента. При tr_type = 1, после успешной авторизации сумма блокирируется и необходимо вызвать метод списание платежа. По умолчанию выставлен tr_type = 0",
  ],
];

const sampleHeadRows = ["Поле", "Тип", "Обязательно", "Описание"];

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <DocumentationPage pageName="Api page">
      <div className="api-page">
        <div className="table-container">
          <Table headRows={sampleHeadRows} rows={sampleRows} className="documentation-table" />
        </div>
      </div>
    </DocumentationPage>
  );
};

// eslint-disable-next-line import/no-default-export
export default Documentation;
