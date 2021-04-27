import React from 'react'
import { Table } from '@Components'

import { CodeBox } from '../../components'
import { DocumentationPage } from '../../templates'

const optionRows = [
  ['onSuccess', 'function', 'Вызовится при успешной оплате'],
  ['onError', 'function', 'Вызовится при ошибке оплаты'],
  ['widgetProps', 'object', 'Объект для кастомизации виджета'],
]

const cardFormRows = [
  [
    'hideErrorMessages',
    'boolean',
    'Параметр, с помощью которого можно скрыть ошибки валидации в инпутах',
  ],
  ['hideEmail', 'boolean', 'Параметр, с помощью которого можно скрыть поле email'],
  [
    'hideCardContainer',
    'boolean',
    'Параметр, с помощью которого можно убрать стили контейнера карты',
  ],
  [
    'hideResultMessage',
    'boolean',
    'Параметр, который скроет результат оплаты. С помощью onSuccess или onError, которые возвращают error_code и error_message, вы сможете отрисовать свой элемент. Если укажете true, фрэйм закроется после оплаты',
  ],
  ['buttonText', 'string', "Текст кнопки. Например, 'Оплатить'"],
  ['title', 'string', 'Название формы. Для её скрытия отправьте пустую строку'],
]

const stylesRows = [
  ['inputContainer', 'object', 'Объект для изменения стилей контейнера во всех инпутах'],
  ['inputs', 'object', 'Объект для изменения стилей всех инпутов'],
  ['submitButton', 'object', 'Объект для изменения стилей кнопки'],
  ['buttonTextStyle', 'object', 'Объект для изменения стилей текста кнопки'],
  [
    'middleContainer',
    'object',
    'Объект для изменения стилей среднего контейнера. Полезно для управления отступами',
  ],
  ['brandImage', 'object', 'Объект для изменения стилей логотипов платежных систем'],
  ['savedCardContainer', 'object', 'Объект для изменения стилей контейнера сохранённой карты'],
  ['savedBrandContainer', 'object', 'Объект для изменения стилей логотипа сохранённой карты'],
  ['maskedPan', 'object', 'Объект для изменения стилей номера сохранённой карты'],
]

const headRows = ['Поле', 'Тип', 'Описание']

const AddWidget: React.FC<any> = () => {
  return (
    <DocumentationPage pageName="Добавление виджета" pageTitle="Добавление виджета">
      <div className="interface-rest">
        <h1>Добавление виджета</h1>
        <p>Ioka Widget - это скрипт для интеграции платежной формы с кастомизацией её элементов</p>
        <p>Чтобы добавить виджет на сайт, нужно:</p>
        <p>
          <span className="number-list">1</span>
          Добавить библиотеку IOKA через CDN:
          <br />
          <CodeBox isInline>
            {"<script src='https://ioka.kz/data/ioka-widget.js'></script>"}
          </CodeBox>
        </p>
        <p>
          <span className="number-list">2</span>
          Добавить элемент для отображения виджета (как можно ближе к body):
          <CodeBox isInline>{"<div id='ioka-widget'></div>"}</CodeBox>
        </p>
        <p>
          <span className="number-list">3</span>
          Сделать инициализацию с заданными параметрами:
        </p>
        <CodeBox>
          const IokaWidgetItem = new IokaWidget(&#123;
          <br />
          &nbsp;&nbsp;src: {'<Ссылка на форму>'},
          <br />
          &nbsp;&nbsp;elementId: {'<Element ID>'},
          <br />
          &nbsp;&nbsp;options: &#123;&#125;,
          <br />
          &nbsp;&nbsp;publicKey: {'<PUBLIC_KEY>'}
          <br />
          &#125;)
        </CodeBox>
        <p>
          <span className="number-list">4</span>
          Привязать к нужной кнопке функцию вызова формы (например, кнопка “Сделать оплату”):
        </p>
        <CodeBox>
          const payFunction = () {'=>'} &#123;
          <br />
          &nbsp;&nbsp;IokaWidgetItem.initPayment()
          <br />
          &#125;
        </CodeBox>
        <br />
        <p>
          Параметры класса
          <CodeBox isInline>IokaWidget</CodeBox>:
        </p>
        <p>
          <CodeBox isInline>src</CodeBox> – ссылка на форму
        </p>
        <p>
          <CodeBox isInline>elementId</CodeBox> - ID html элемента, в котором будет рендериться
          виджет
        </p>
        <p>
          <CodeBox isInline>options</CodeBox> – объект для дополнительных опций (подробности в
          таблице ниже)
        </p>
        <p>
          <CodeBox isInline>publicKey</CodeBox> – публичный ключ с личного кабинета
        </p>
        <br />
        <p>
          Параметры объекта <CodeBox isInline>options</CodeBox>
        </p>
        <br />
        <div className="table-container">
          <Table headRows={headRows} rows={optionRows} className="documentation-table" />
        </div>
        <p>
          <CodeBox isInline>widgetProps</CodeBox> принимает 2 объекта:
        </p>
        <p>
          &nbsp;&nbsp;<CodeBox isInline>cardForm</CodeBox>- для кастомизации элементов рендера
        </p>
        <p>
          &nbsp;&nbsp;<CodeBox isInline>styles</CodeBox>- для кастомизации стилей
        </p>
        <br />
        <p>
          Параметры объекта <CodeBox isInline>cardForm</CodeBox>
        </p>
        <br />
        <Table headRows={headRows} rows={cardFormRows} />
        <p>
          Параметры объекта <CodeBox isInline>styles</CodeBox>
        </p>
        <br />
        <Table headRows={headRows} rows={stylesRows} />
        <br />
        <p>
          <a href="/data/example.html" className="link" download>
            Скачать готовые примеры
          </a>{' '}
          для тестирования виджета
        </p>
      </div>
    </DocumentationPage>
  )
}

export default AddWidget
