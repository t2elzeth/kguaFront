import React from "react";

import { DocumentationPage } from "../../templates";

export type DocumentationProps = {};

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <DocumentationPage pageName="Payment" pageTitle="Платежи">
      <div className="payments">
        <h1>Платежи</h1>
        <p>
          Адрес: /api/payments/register
          <br />
          <br />
          Метод: POST
          <br />
          <br />
          Описание: Используется для формирования запроса на оплату.
        </p>
      </div>
    </DocumentationPage>
  );
};

export default Documentation;
