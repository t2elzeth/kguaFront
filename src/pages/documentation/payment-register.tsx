import { Table } from '@Components'
import React from 'react'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

export type PaymentRegisterProps = { any }

const sampleRows = [
  ['amount', 'integer', 'да', 'Сумма платежа'],
  [
    'currency',
    'integer',
    'нет',
    'Код валюты в стандарте ISO 4217. Если не указан, то используется значение по умолчанию (398 - KZT)',
  ],
  [
    'order_id',
    'integer',
    'да',
    'Номер (идентификатор) заказа в системе магазина, уникален для каждого магазина в пределах системы.',
  ],
  [
    'tr_type',
    'integer',
    'нет',
    'Тип транзакции (0 или 1). При tr_type = 0 после успешной авторизации, платеж автоматически будет списан со счета клиента. При tr_type = 1, после успешной авторизации сумма блокирируется и необходимо вызвать метод списание платежа. По умолчанию выставлен tr_type = 0',
  ],

  ['email', 'string', 'нет', 'Почтовый адрес (куда будет выслан электронный счет оплаты)'],
  [
    'phone',
    'string',
    'нет',
    'Телефонный номер пользователя должен быть указан в международном формате без знака «+»',
  ],
  [
    'additional_params',
    'object',
    'нет',
    "Дополнительные параметры заказа, которые сохраняются для просмотра из личного кабинета продавца. Дополнительные параметры следует указывать в следующем формате. '_': '_' Каждую новую пару имени и значения параметра следует отделять запятой ",
  ],
  [
    'back_url',
    'string',
    'да',
    'Ссылка, служащая для перенаправления клиента на сайт мерчанта, после проведения оплаты.',
  ],
  [
    'callback_url',
    'string',
    'нет',
    'Ссылка, служащая для приема статуса платежа после оплаты. После того, как ваш клиент завершит платеж, на указанный URL отправляется POST запрос со статусом платежа.',
  ],
  [
    'client_id',
    'integer',
    'нет',
    'Номер (идентификатор) клиента в системе магазина. Используется для реализации функциональности связок. Указание этого параметра при платежах по связке необходимо - в противном случае платёж будет не успешен.',
  ],
  [
    'token',
    'string',
    'нет',
    'Идентификатор связки (токен платежной карты), созданной ранее. Если этот параметр передаётся в данном запросе, то это означает что: 1) Данный заказ может быть оплачен только с помощью связки; 2) Плательщик будет перенаправлен на платежную страницу, где требуется только ввод CVV.',
  ],
  [
    'template',
    'string',
    'нет',
    'Тип шаблона формы оплаты. Выберите один из: 1) FLAT 2) 3D (по умолчанию) 2) CUSTOM',
  ],
  [
    'features',
    'string',
    'нет',
    'Контейнер для параметра feature , в котором можно указать следующие значения. VERIFY - Если указать это значение после запроса на регистрацию заказа произойдёт верификация держателя карты без списания средств с его счёта, поэтому в запросе можно передавать нулевую сумму. Верификация позволяет убедиться, что карта находится в руках владельца, и впоследствии списывать с этой карты средства, не прибегая к проверке аутентификационных данных (CVC, 3D-Secure) при совершении последующих платежей',
  ],
  [
    'fingerprint',
    'base64-string',
    'нет (Обязателен только если во features указан MASTERPASS)',
    'Уникальный fingerprint устройства с которого будет происходит сохранение карты и последующее ее использование. MASTERPASS, флаг показывает что при оплате нужно обращаться к хранилищу MASTERPASS',
  ],
]

const sampleHeadRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const rows = [
  ['reference', 'integer', 'да', 'Уникальный идентификатор платежа'],
  ['access_hash', 'string', 'да', 'Хэш доступа, для формы'],
  ['url', 'string', 'да', 'Адрес на форму оплаты'],
]

const headRows = ['Поле', 'Тип', 'Обязательность', 'Описание']

const PaymentRegister: React.FC<PaymentRegisterProps> = () => {
  return (
    <DocumentationPage pageName="Регистрация платежей" pageTitle="Запрос на регистрацию платежа">
      <div className="interface-rest">
        <h1>Запрос на регистрацию платежа</h1>
        <p>
          Метод:
          <CodeBox isInline>POST</CodeBox>
        </p>
        <p>
          Адрес:
          <CodeBox isInline>/api/payments/register/</CodeBox>
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
          <Table headRows={sampleHeadRows} rows={sampleRows} className="documentation-table" />
        </div>
        <p>Параметры ответа:</p>
        <div className="table-container">
          <Table headRows={headRows} rows={rows} className="documentation-table" />
        </div>
        <p>Пример запроса:</p>
        <CodeBox>
          POST /api/payments/register/
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
          &nbsp;&nbsp;"amount": 3000,
          <br />
          &nbsp;&nbsp;"currency": 398,
          <br />
          &nbsp;&nbsp;"order_id": 10003265,
          <br />
          &nbsp;&nbsp;"tr_type": 0,
          <br />
          &nbsp;&nbsp;"email": "user@example.com",
          <br />
          &nbsp;&nbsp;"phone": "87*********",
          <br />
          &nbsp;&nbsp;"back_url": "http://shop.kz/",
          <br />
          &nbsp;&nbsp;"callback_url": "http://shop.kz/callback",
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
        <br />
        <br />
        <h1>Сохранение карты без оплаты</h1>
        <p>
          Для того чтобы сохранить карту без оплаты, передайте значение “VERIFY” в параметр{' '}
          <a href="#features">features</a> и укажите параметр <a href="#client_id">client_id</a> (id
          клиента, к которому привязывается карта).{' '}
        </p>
        <p>
          После того как ваш клиент заполнит карточные данные в форме, происходит верификация
          держателя карты без списания средств с его счёта. Сохраненной карте будет присвоен
          уникальный token, используя который можно списывать с этой карты средства, не прибегая к
          проверке аутентификационных данных (CVC, 3D-Secure) при совершении последующих платежей.
        </p>
        <p>
          Список сохраненных карт клиента можно получить обратившись в метод{' '}
          <CodeBox isInline>/api/cards/</CodeBox> как описано{' '}
          <a href="/documentation/get-saved-cards" className="link">
            тут
          </a>
        </p>
        <br />
        <br />
        <h1>Регистрация оплаты с возможностью сохранение карты:</h1>
        <p>
          Если указан параметр <a href="#client_id">client_id</a>, и не указан параметр{' '}
          <a href="#token">token</a>, то в форме оплаты у вашего клиента будет возможность сохранить
          карточные данные в системе ioka. Сохраненной карте будет присвоен уникальный token. Вы
          можете принимать оплату без ввода карточных данных, используя token сохраненной карты как
          указано ниже
        </p>
        <br />
        <br />
        <h1>Регистрация оплаты по сохраненной карте (токену):</h1>
        <p>
          Если указана валидная пара <a href="#client_id">client_id</a> и <a href="#token">token</a>
          , то в форме оплаты будут заполнены ранее сохраненные карточные данные (pan masked, expiry
          date, holder)
        </p>
        <h1>Регистрация оплаты по сохраненной карте из хранилища MasterPass:</h1>
        <p>
          Для проведения оплаты через карты сохраненные в хранилищи MasterPass необходимо
          зарегестировать заказ по роуту <CodeBox isInline>/api/payments/register/</CodeBox> с
          указанием поле features, значения MASTERPASS. При указании что оплата будет проводиться
          посредством сохраненных в MasterPass карт, то параметры fingerprint и phone становятся
          объязательными.
        </p>
      </div>
    </DocumentationPage>
  )
}

export default PaymentRegister
